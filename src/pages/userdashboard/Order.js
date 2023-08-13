import React, { useState, useEffect } from "react";
import Usersidebar from "../../components/Usersidebar";
import axios from "axios";
import "../../styles/order.css";
import Cookies from "js-cookie";

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const baseUrl = "http://localhost:8081/api/v1/user"; // Update with your actual API URL

  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, [currentPage]);

  const fetchOrders = async () => {
    try {
      const token = Cookies.get("USER_TOKEN");
      const response = await axios.get(
        `${baseUrl}/orders?pageNo=${currentPage}&pageSize=${itemsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the headers
          }
        }
      );

      setOrders(response.data.orders);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const ordersToDisplay = orders.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="accountwrp">
      <Usersidebar />
      <div className="ordermenu">
        <p className="ord-p">My Orders</p>
        <div className="table-cont">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date Ordered</th>
                <th>Date Delivered</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ordersToDisplay.map((order) => (
                <tr key={order.id}>
                  <td>{order.dateOrdered}</td>
                  <td>{order.transactionType}</td>
                  <td>{order.description}</td>
                  <td>${order.totalPrice}</td>
                  <td>{order.category}</td>
                  <td>{order.orderStatus}</td>
                  <td>
                    <button>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={7}>Total: $1,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
