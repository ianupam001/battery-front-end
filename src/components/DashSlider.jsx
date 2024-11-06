import { Modal, Table, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function DashSlider() {
  const { currentUser } = useSelector((state) => state.user);
  const [userSlider, setUserSlider] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [sliderIdToDelete, setServiceIdToDelete] = useState("");
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const res = await fetch(
          `${apiUrl}/api/slider/getsliders?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserSlider(data.sliders);
          if (data.sliders.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchSlider();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userSlider.length;
    try {
      const res = await fetch(
        `${apiUrl}/api/slider/getsliders?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserSlider((prev) => [...prev, ...data.sliders]);
        if (data.sliders.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteService = async () => {
    setShowModal(false);
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(
        `${apiUrl}/api/slider/deleteslider/${sliderIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json", // Optional: Specify content type if needed
          },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserSlider((prev) =>
          prev.filter((slider) => slider._id !== sliderIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    // <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
    <div className="overflow-x-scroll p-3">
      <div className="">
        {currentUser.isAdmin && (
          <Link to={`/create-slider`}>
            <Button
              type="button"
              className="bg-orange-400 text-white hover:bg-orange-400/90 mb-3"
              
            >
              Create New Slider
            </Button>
          </Link>
        )}
      </div>
      {currentUser.isAdmin && userSlider.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Slider image</Table.HeadCell>
              <Table.HeadCell>Slider title</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userSlider.map((slider) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(slider.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/slider/${slider.slug}`}>
                      <img
                        src={slider.image}
                        alt={slider.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{slider.title}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setServiceIdToDelete(slider._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-teal-500 hover:underline"
                      to={`/update-slider/${slider._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no sliders yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this slider?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteService}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
