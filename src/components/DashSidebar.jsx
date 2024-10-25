import { Sidebar } from "flowbite-react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function DashSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
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
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          {currentUser.isAdmin && (
            <div>
              {/* <Link to='#'>
            <Sidebar.Item
              icon={HiChartPie}
              labelColor='dark'
              as='div'
            >
           <div className="sidebar-item" onClick={toggleDropdown}>
              <div className={`sidebar-title ${tab === 'sliders' ? 'active' : ''}`}>
                <span>Home</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            {isOpen && (
              <div className="dropdown">
                <Link to="/dashboard?tab=sliders" className="dropdown-item">
                  Slider
                </Link>
                <Link to="/dashboard?tab=testimonials" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="/dashboard?tab=brands" className="dropdown-item">
                  Brands
                </Link>
              </div>
            )}
            </Sidebar.Item>
            </Link> */}
              <Link to="/dashboard?tab=dash">
                <Sidebar.Item
                  active={tab === "dash" || !tab}
                  icon={HiChartPie}
                  as="div"
                >
                  Dashboard
                </Sidebar.Item>
              </Link>

              <Link to="/dashboard?tab=profile">
                <Sidebar.Item
                  active={tab === "profile"}
                  icon={HiUser}
                  label={currentUser.isAdmin ? "Admin" : "User"}
                  labelColor="dark"
                  as="div"
                >
                  Profile
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=posts">
                <Sidebar.Item
                  active={tab === "posts"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Posts
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=products">
                <Sidebar.Item
                  active={tab === "products"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Products
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=services">
                <Sidebar.Item
                  active={tab === "services"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Services
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=sliders">
                <Sidebar.Item
                  active={tab === "sliders"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Sliders
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=brands">
                <Sidebar.Item
                  active={tab === "brands"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Brands
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=testimonials">
                <Sidebar.Item
                  active={tab === "testimonials"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Testimonials
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=inquiries">
                <Sidebar.Item
                  active={tab === "inquiries"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Inquiries
                </Sidebar.Item>
              </Link>
              {/*           
          {currentUser.isAdmin && (
            <>
              <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Users
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>
            </>
          )} */}

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
