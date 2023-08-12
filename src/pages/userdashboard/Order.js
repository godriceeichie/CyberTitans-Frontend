import React, { useState } from "react";
import Usersidebar from "../../components/Usersidebar";
import "../../styles/order.css";

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const orders = [
    {
      date: "2023-07-19",
      transactionType: "Expensive Transaction",
      description: "House Cleaning Tools",
      amount: "$300",
      category: "Domestic Appliance",
      status: "Pending",
    },
    {
      date: "2023-07-20",
      transactionType: "Regular Transaction",
      description: "Groceries",
      amount: "$50",
      category: "Food",
      status: "Completed",
    },
    {
      date: "2023-07-19",
      transactionType: "Expensive Transaction",
      description: "House Cleaning Tools",
      amount: "$300",
      category: "Domestic Appliance",
      status: "Pending",
    },
    {
      date: "2023-07-20",
      transactionType: "Regular Transaction",
      description: "Groceries",
      amount: "$50",
      category: "Food",
      status: "Completed",
    },
    {
      date: "2023-07-19",
      transactionType: "Expensive Transaction",
      description: "House Cleaning Tools",
      amount: "$300",
      category: "Domestic Appliance",
      status: "Pending",
    },
    {
      date: "2023-07-20",
      transactionType: "Regular Transaction",
      description: "Groceries",
      amount: "$50",
      category: "Food",
      status: "Completed",
    },
    {
      date: "2023-07-19",
      transactionType: "Expensive Transaction",
      description: "House Cleaning Tools",
      amount: "$300",
      category: "Domestic Appliance",
      status: "Pending",
    },
    {
      date: "2023-07-20",
      transactionType: "Regular Transaction",
      description: "Groceries",
      amount: "$50",
      category: "Food",
      status: "Completed",
    },
    {
      date: "2023-07-19",
      transactionType: "Expensive Transaction",
      description: "House Cleaning Tools",
      amount: "$300",
      category: "Domestic Appliance",
      status: "Pending",
    },
    {
      date: "2023-07-20",
      transactionType: "Regular Transaction",
      description: "Groceries",
      amount: "$50",
      category: "Food",
      status: "Completed",
    },
    {
      date: "2023-07-19",
      transactionType: "Expensive Transaction",
      description: "House Cleaning Tools",
      amount: "$300",
      category: "Domestic Appliance",
      status: "Pending",
    },
    {
      date: "2023-07-20",
      transactionType: "Regular Transaction",
      description: "Groceries",
      amount: "$50",
      category: "Food",
      status: "Completed",
    },
	{
		date: "2023-07-19",
		transactionType: "Expensive Transaction",
		description: "House Cleaning Tools",
		amount: "$300",
		category: "Domestic Appliance",
		status: "Pending",
	  },
	  {
		date: "2023-07-20",
		transactionType: "Regular Transaction",
		description: "Groceries",
		amount: "$50",
		category: "Food",
		status: "Completed",
	  },
	  {
		date: "2023-07-19",
		transactionType: "Expensive Transaction",
		description: "House Cleaning Tools",
		amount: "$300",
		category: "Domestic Appliance",
		status: "Pending",
	  },
	  {
		date: "2023-07-20",
		transactionType: "Regular Transaction",
		description: "Groceries",
		amount: "$50",
		category: "Food",
		status: "Completed",
	  },
	  {
		date: "2023-07-19",
		transactionType: "Expensive Transaction",
		description: "House Cleaning Tools",
		amount: "$300",
		category: "Domestic Appliance",
		status: "Pending",
	  },
	  {
		date: "2023-07-20",
		transactionType: "Regular Transaction",
		description: "Groceries",
		amount: "$50",
		category: "Food",
		status: "Completed",
	  },
	  {
		date: "2023-07-19",
		transactionType: "Expensive Transaction",
		description: "House Cleaning Tools",
		amount: "$300",
		category: "Domestic Appliance",
		status: "Pending",
	  },
	  {
		date: "2023-07-20",
		transactionType: "Regular Transaction",
		description: "Groceries",
		amount: "$50",
		category: "Food",
		status: "Completed",
	  },
	  {
		date: "2023-07-19",
		transactionType: "Expensive Transaction",
		description: "House Cleaning Tools",
		amount: "$300",
		category: "Domestic Appliance",
		status: "Pending",
	  },
	  {
		date: "2023-07-20",
		transactionType: "Regular Transaction",
		description: "Groceries",
		amount: "$50",
		category: "Food",
		status: "Completed",
	  },
	  {
		date: "2023-07-19",
		transactionType: "Expensive Transaction",
		description: "House Cleaning Tools",
		amount: "$300",
		category: "Domestic Appliance",
		status: "Pending",
	  },
	  {
		date: "2023-07-20",
		transactionType: "Regular Transaction",
		description: "Groceries",
		amount: "$50",
		category: "Food",
		status: "Completed",
	  },
	  {
		date: "2023-07-19",
		transactionType: "Expensive Transaction",
		description: "House Cleaning Tools",
		amount: "$300",
		category: "Domestic Appliance",
		status: "Pending",
	  },
	  {
		date: "2023-07-20",
		transactionType: "Regular Transaction",
		description: "Groceries",
		amount: "$50",
		category: "Food",
		status: "Completed",
	  },
	  {
      date: "2023-07-19",
      transactionType: "Expensive Transaction",
      description: "House Cleaning Tools",
      amount: "$300",
      category: "Domestic Appliance",
      status: "Pending",
    },
    {
      date: "2023-07-20",
      transactionType: "Regular Transaction",
      description: "Groceries",
      amount: "$50",
      category: "Food",
      status: "Completed",
    },
  ];

  const totalOrders = orders.length;
  const totalPages = Math.ceil(totalOrders / itemsPerPage);

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
                <th>Date</th>
                <th>Transaction Type</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ordersToDisplay.map((order, index) => (
                <tr key={index}>
                  <td>{order.date}</td>
                  <td>{order.transactionType}</td>
                  <td>{order.description}</td>
                  <td>{order.amount}</td>
                  <td>{order.category}</td>
                  <td>{order.status}</td>
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
