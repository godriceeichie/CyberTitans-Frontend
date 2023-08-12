/** @format */
import React from "react";
import Usersidebar from "../../components/Usersidebar";
import "../../styles/account.css";

const Account = () => {
	return (
		<>
			<div className="accountwrp">
				<Usersidebar />
				<div className="contentmenu">
					<div className="acc-vw">
						<div className="top-bx">
							<div className="lft-sd">
								<div className="wlc">
									👋
									<p>Welcome</p>
								</div>
							</div>
							<div className="rgt-sd">
								<div className="tot">
									<button>Total Orders</button>
									<p>40</p>
								</div>
								<div className="tot">
									<button>Total Orders</button>
									<p>40</p>
								</div>
							</div>
						</div>
					<div className="btm-bx">
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-07-19</td>
                  <td>Expensive Transaction</td>
                  <td>House Cleaning Tools</td>
                  <td>$300</td>
                  <td>Domestic Appliance</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>2023-07-19</td>
                  <td>Expensive Transaction</td>
                  <td>House Cleaning Tools</td>
                  <td>$300</td>
                  <td>Domestic Appliance</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>2023-07-19</td>
                  <td>Expensive Transaction</td>
                  <td>House Cleaning Tools</td>
                  <td>$300</td>
                  <td>Domestic Appliance</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>2023-07-19</td>
                  <td>Expensive Transaction</td>
                  <td>House Cleaning Tools</td>
                  <td>$300</td>
                  <td>Domestic Appliance</td>
                  <td>Pending</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={7}>View More</td>
                </tr>
              </tfoot>
            </table>
          </div>
					</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Account;
