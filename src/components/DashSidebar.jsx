import { Sidebar } from "flowbite-react";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const apiUrl = import.meta.env.VITE_BASE_URL;

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const isActiveTab = (tab) => {
    return location.search.includes(`tab=${tab}`);
  };

  const handleSignout = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/user/signout`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        localStorage.removeItem("access_token");
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className="w-full md:w-56 shadow mt-2">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          {currentUser.isAdmin && (
            <div>
              <Link to="/dashboard?tab=dash">
                <Sidebar.Item
                  active={isActiveTab("dash")}
                  icon={HiChartPie}
                  className={`cursor-pointer ${isActiveTab("dash") ? "bg-orange-200" : ""}`}
                >
                  Dashboard
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=profile">
                <Sidebar.Item
                  active={isActiveTab("profile")}
                  icon={HiUser}
                  label={currentUser.isAdmin ? "Admin" : "User"}
                  className={`cursor-pointer ${isActiveTab("profile") ? "bg-orange-200" : ""}`}
                >
                  Profile
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=posts">
                <Sidebar.Item
                  active={isActiveTab("posts")}
                  icon={HiDocumentText}
                  className={`cursor-pointer ${isActiveTab("posts") ? "bg-orange-200" : ""}`}
                >
                  Posts
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=products">
                <Sidebar.Item
                  active={isActiveTab("products")}
                  icon={HiDocumentText}
                  className={`cursor-pointer ${isActiveTab("products") ? "bg-orange-200" : ""}`}
                >
                  Products
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=services">
                <Sidebar.Item
                  active={isActiveTab("services")}
                  icon={HiDocumentText}
                  className={`cursor-pointer ${isActiveTab("services") ? "bg-orange-200" : ""}`}
                >
                  Services
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=sliders">
                <Sidebar.Item
                  active={isActiveTab("sliders")}
                  icon={HiDocumentText}
                  className={`cursor-pointer ${isActiveTab("sliders") ? "bg-orange-200" : ""}`}
                >
                  Sliders
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=brands">
                <Sidebar.Item
                  active={isActiveTab("brands")}
                  icon={HiDocumentText}
                  className={`cursor-pointer ${isActiveTab("brands") ? "bg-orange-200" : ""}`}
                >
                  Brands
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=testimonials">
                <Sidebar.Item
                  active={isActiveTab("testimonials")}
                  icon={HiDocumentText}
                  className={`cursor-pointer ${isActiveTab("testimonials") ? "bg-orange-200" : ""}`}
                >
                  Testimonials
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=metadata">
                <Sidebar.Item
                  active={isActiveTab("metadata")}
                  icon={HiDocumentText}
                  className={`cursor-pointer ${isActiveTab("metadata") ? "bg-orange-200" : ""}`}
                >
                  Metadata
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=inquiries">
                <Sidebar.Item
                  active={isActiveTab("inquiries")}
                  icon={HiDocumentText}
                  className={`cursor-pointer ${isActiveTab("inquiries") ? "bg-orange-200" : ""}`}
                >
                  Enquiries
                </Sidebar.Item>
              </Link>

             

              {/* <Link to="/dashboard?tab=comments">
                <Sidebar.Item
                  active={isActiveTab("comments")}
                  icon={HiAnnotation}
                  className={`cursor-pointer ${isActiveTab("comments") ? "bg-orange-300" : ""}`}
                >
                  Comments
                </Sidebar.Item>
              </Link> */}

              <Sidebar.Item
                icon={HiArrowSmRight}
                className="cursor-pointer"
                onClick={handleSignout}
              >
                Sign Out
              </Sidebar.Item>
            </div>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
