import React from "react";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
const LeaderBoard = () => {
  return (
    <div className="overflow-x-auto min-h-screen ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>Position</label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="border-gray-300 border-b-2 ">
            <th>
              <img className="w-11 h-11" src={first} />
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              <img className="w-11 h-11" src={second} />
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              <img className="w-11 h-11" src={third} />
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              {/* <img className="w-11 h-11" src={third} /> */}
              <p className="mx-4 text-lg">4</p>
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              <p className="mx-4 text-lg">5</p>
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              <p className="mx-4 text-lg">6</p>
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              <p className="mx-4 text-lg">7</p>
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              <p className="mx-4 text-lg">8</p>
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              <p className="mx-4 text-lg">9</p>
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>

          <tr className="border-gray-300 border-b-2 ">
            <th>
              <p className="mx-4 text-lg">10</p>
            </th>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Abdullah Al Rahman</div>
                  <div className="text-sm opacity-50">CS-CS</div>
                </div>
              </div>
            </td>
            <td>abdullahalrahman@gmail.com</td>
            <td>95/120</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
