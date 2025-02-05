import fetch from 'node-fetch';
import { createClient } from "@sanity/client";
import path from 'path';

const client = createClient({
  projectId: 'uww8mh60',  // Replace with your Sanity project ID
  dataset: 'production',   // Replace with your dataset name
  useCdn: false,           // Disable CDN for real-time updates
  apiVersion: '2024-02-01',
  token: process.env.SANITY_API_TOKEN
});


// Fetch product data from your API
async function fetchProductData() {
  try {
    const response = await fetch('https://template-0-beta.vercel.app/api/product');
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error('Error fetching product data:', error);
    process.exit(1);
  }
}

// Function to upload images to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);

    const imageBuffer = await imageResponse.arrayBuffer();
    const fileName = path.basename(imageUrl);

    const assetDocument = await client.assets.upload('image', Buffer.from(imageBuffer), {
      filename: fileName,
    });

    return assetDocument._id; // Return the image reference ID
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

// Delete all existing product documents
async function deleteExistingProducts() {
  try {
    await client.delete({ query: '*[_type == "product"]' });
    console.log('Deleted existing products.');
  } catch (error) {
    console.error('Error deleting existing products:', error);
    process.exit(1);
  }
}

// Import new product data into Sanity
async function importData() {
  try {
    const products = await fetchProductData();
    await deleteExistingProducts();

    const mutations = [];

    for (const product of products) {
      let imageRef = null;
      if (product.imagePath) {
        imageRef = await uploadImageToSanity(product.imagePath);
      }

      mutations.push({
        create: {
          _type: 'product',
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          discountPercentage: product.discountPercentage,
          isFeaturedProduct: product.isFeaturedProduct,
          stockLevel: product.stockLevel,
          category: product.category,
          image: imageRef
            ? {
                _type: "image",
                asset: {
                  _type: "reference",
                  _ref: imageRef,
                },
              }
            : null,
        },
      });
    }

    const result = await client.mutate(mutations);
    console.log('Successfully imported products:', result);
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
}

importData();
