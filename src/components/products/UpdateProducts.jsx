import { Form, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../ApiCalls";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");



//////////////////////////////////////////////
const UpdateProduct = () => {
  const { itemId } = useParams();
  console.log("ITEM+ID", itemId)
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const getItemDetail = async () => {
      try {
        const product = await getItemById(itemId);
        setItem(product);
      } catch (error) {
        console.error(`Getting Items ERROR: ${error}`);
      }
    };
    getItemDetail()
  }, [itemId]);
  ///////////////////////////////////
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
    const handlePriceChange = (event) => {
      setPrice(event.target.value);
    };
    const handleQuantityChange = (event) => {
      setQty(event.target.value);
    };
    const handleFileNameChange = (event) => {
      setFileName(event.target.value);
    };
    
setItem(document.getElementsByName("title").value)
   
    ///////////////////////////////

  const fields = {
    title: document.getElementsByName("product").value,
    price: document.getElementsByName("price").value,
    inventory: document.getElementsByName("inventory").value,
    image_name: document.getElementsByName("image_name").value
  }
  
  
  
  const handleSave = async () => {
    event.preventDefault();

    const role = JSON.parse(localStorage.getItem("role"))
    
    if(role === "admin") {
      try {
        console.log(fields)
      } catch (error) {
        console.error ("Error Saving product: ", error)
      }
    }
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="detail-container grid grid-cols-2 bg-gray-200 rounded-lg shadow-lg h-2/5 w-10/12 ">
          <div className="photo-container flex justify-center items-center rounded-lg">
            <img
              src={`../../public/${item.image_name}`}
              alt={item.title}
              className="w-3/4 h-3/4"
            />
          </div>
          <div className="item-detail flex justify-center items-center rounded-lg">
            <Form method="post" id="item-form" className="flex  flex-col">
              <div className="flex gap-1 items-center">
                <span className="font-bold pb-2">Title: </span>
                <input
                  placeholder="Product Title"
                  aria-label="Product Title"
                  type="text"
                  name="product"
                  defaultValue={item.title}
                  className="flex-grow pl-2"
                  onChange={handleTitleChange}
                />
              </div>
              <div className="flex gap-1 items-center">
                <span className="font-bold pb-2">Price: </span>
                <input
                  placeholder="Price"
                  aria-label="Product price"
                  type="text"
                  name="price"
                  defaultValue={`$${item.price}`}
                  className="flex-grow pl-2"
                  onChange={handlePriceChange}
                />
              </div>
              <div className="flex gap-1 items-center">
                <span className="font-bold pb-2">Inventory: </span>
                <input
                  placeholder="inventory"
                  aria-label="Product inventory"
                  type="number"
                  name="inventory"
                  defaultValue={item.inventory}
                  className="flex-grow pl-2"
                  onChange={handleQuantityChange}
                />
              </div>
              <div className="flex gap-1 items-center">
                <span className="font-bold pb-2">Image Name: </span>
                <input
                  placeholder="image_name"
                  aria-label="Product Image"
                  type="text"
                  name="image_name"
                  defaultValue={item.image_name}
                  className="flex-grow pl-2"
                  onChange={handleFileNameChange}
                />
              </div>
              <div className="flex flew-row gap-4 ">
                <button
                  className="bg-blue-400 w-1/2 text-white font-bold px-0.5 py-1 mt-2 rounded-lg hover:bg-blue-600 hover:font-extrabold"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-blue-400 w-1/2 text-white font-bold px-0.5 py-1 mt-2 rounded-lg hover:bg-blue-600 hover:font-extrabold hover:bg-blue-600"
                  // onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
