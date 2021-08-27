import React from "react";
import { Link } from "react-router-dom";

const ListCategory = (props) => {
  const onHandleRemove = (id) => {
    props.deleteCategory(id);
  };

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>
                <Link
                  to="/admin/category/add"
                  className="btn btn-sm btn-success"
                >
                  Thêm danh mục
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.categories.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>
                    <Link to={`/category/${category._id}`}>
                      {category.name}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/admin/category/edit/${category._id}`}
                      className="btn btn-danger btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => onHandleRemove(category._id)}
                      className="btn btn-info btn-sm ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCategory;
