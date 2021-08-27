import { useState, useEffect } from "react";
import Routes from "./Routes";
import ProductAPI from "./api/productAPI";
import CategoryAPI from "./api/categoryAPI";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products);

        const { data: categories } = await CategoryAPI.getAll();
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addProduct = async (product) => {
    try {
      const result = await ProductAPI.add(product);
      setProducts(...products, product);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (data, id) => {
    try {
      await ProductAPI.update(id, data);
      const newProduct = products.map((product) =>
        product._id === id ? data : product
      );
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const removeProduct = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProducts = products.filter((product) => product._id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = async (category) => {
    try {
      await CategoryAPI.add(category);
      setCategories([...categories, category]);
    } catch (error) {
      console.log(error);
    }
  };
  const editCategory = async (data, id) => {
    try {
      await CategoryAPI.update(id, data);
      const newCategory = categories.map((category) =>
        category._id === id ? data : category
      );
      setCategories(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  const removeCategory = async (id) => {
    try {
      await CategoryAPI.remove(id);
      const newCategories = categories.filter(
        (category) => category._id !== id
      );
      setCategories(newCategories);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Routes
        products={products}
        addProduct={addProduct}
        editProduct={editProduct}
        deleteProduct={removeProduct}
        categories={categories}
        addCategory={addCategory}
        editCategory={editCategory}
        deleteCategory={removeCategory}
      />
    </div>
  );
}

export default App;
