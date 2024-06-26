from dotenv import load_dotenv
load_dotenv()

import streamlit as st
import os
import google.generativeai as genai
import io
from PIL import Image

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_gemini_responses(input, img):
    model = genai.GenerativeModel("gemini-pro-vision")
    response = model.generate_content([input, img[0]])
    return response.text

def input_image_details(uploaded_img):
    if uploaded_img is not None:
        # Assuming img is an image object in any format
        img_bytes_io = io.BytesIO()
        uploaded_img.save(img_bytes_io, format=uploaded_img.format)
        img_bytes_value = img_bytes_io.getvalue()

        image_parts = [
            {
                "mime_type": f"image/{uploaded_img.format.lower()}",
                "data": img_bytes_value
            }
        ]
        return image_parts
    else:
        raise FileNotFoundError("No file uploaded")
## Streamlit App

st.set_page_config(page_title="Lost and Found")
st.header("Lost and Found Items")

uploaded_img = st.file_uploader("Upload Lost item image", type=["jpeg", "png", "jpg"])

if uploaded_img is not None:
    image = Image.open(uploaded_img)
    st.write("Image Uploaded Successfully")
    st.image(image, caption="Uploaded Image", use_column_width=True)

submit = st.button("Generate Description")

input_prompt1 = """
Act like a lost and found officer. Your task is to describe the items that have been found using their images without revealing your identity. You are an excellent observer and can do picture composition easily. Your task is to identify the details in the picture and describe it in a paragraph of not more than 400 characters. 
Focus on specific item categories: You can specify which item categories Gemini should prioritize in its descriptions, such as luggage (briefcases, backpacks, suitcases), electronics (laptops, tablets, phones), personal items (wallets, purses, keys), or travel documents (tickets, passports).
Highlight distinguishing features: Mention specific details that owners might remember about their lost items, such as brands, colors, patterns, unique markings, or attached accessories.
Avoid subjective descriptions: Instruct Gemini to avoid using subjective terms like "nice" or "beautiful" and focus on objective characteristics. 
No need to write unnecessary lines that increase the length of the response unnecessarily like announcing that here is the description of the image. Write the paragraph as such that the reader can imagine the object/objects in the image vividly. Keep in mind that the description you generated will help people to identify the objects that they have lost at a railway station. 
"""
if submit:
    image_data = input_image_details(image)
    if uploaded_img is not None:
        response = get_gemini_responses(input_prompt1, img=image_data)
        st.write(response)
    else:
        st.write("Please upload an image")
