import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetAllUsers } from "../../services/GetAllUsers";
import { Bars } from "react-loader-spinner";
import { logoutHandler } from "./helper";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");
    if (!userToken || userToken === "undefined") {
      return navigate("/login");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await GetAllUsers();

      if (resp && resp.status === 200 && resp.data && resp.data.length > 0) {
        setUsers(resp.data);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-[#F2F3F7] flex flex-col h-screen px-[48px] font-sf">
      <div className="relative left-[200px] top-[118px]">
        <p className="font-semibold text-[20px] leading-6 mb-6">
          Hello {location && location.state && location.state.email}!
        </p>

        <p className="font-normal">
          Here you can see all registered users ({users && users.length})
        </p>

        {users && users.length > 0 ? (
          <div className="w-[70%] mt-8">
            <table className="w-[70%]">
              <thead>
                <tr className="">
                  <th className="text-left font-semibold">#</th>
                  <th className="text-left font-semibold">Email</th>
                  <th className="text-left font-semibold">
                    Date of registration
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {users &&
                  users.length > 0 &&
                  users.map((item, index) => {
                    return (
                      <tr className="font-light text-[16px]">
                        <td>{index + 1}</td>
                        <td>{item.email}</td>
                        <td>{moment(item.CreatedAt).format("DD.MM.YYYY")}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-10">
            <Bars
              height="40"
              width="40"
              color="black"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}

        <p
          className="mt-8 hover:cursor-pointer"
          onClick={() => logoutHandler(navigate)}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
