import { Modal, Table, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function DashTestimonial() {
  const { currentUser } = useSelector((state) => state.user);
  const [userTestimonial, setUserTestimonial] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [testimonialIdToDelete, setServiceIdToDelete] = useState("");
  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await fetch(
          `${apiUrl}/api/testimonial/gettestimonials?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserTestimonial(data.testimonials);
          if (data.testimonials.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchTestimonial();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userTestimonial.length;
    try {
      const res = await fetch(
        `${apiUrl}/api/testimonial/gettestimonials?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserTestimonial((prev) => [...prev, ...data.testimonials]);
        if (data.testimonials.length < 9) {
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
      const res = await fetch(
        `${apiUrl}/api/testimonial/deletetestimonial/${testimonialIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserTestimonial((prev) =>
          prev.filter(
            (testimonial) => testimonial._id !== testimonialIdToDelete
          )
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
          <Link to={`/create-testimonial`}>
            <Button
              type="button"
              gradientDuoTone="purpleToPink"
              className="mb-3"
            >
              Create New Testimonial
            </Button>
          </Link>
        )}
      </div>
      {currentUser.isAdmin && userTestimonial.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Testimonial image</Table.HeadCell>
              <Table.HeadCell>Testimonial title</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userTestimonial.map((testimonial) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(testimonial.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/testimonial/${testimonial.slug}`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{testimonial.title}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setServiceIdToDelete(testimonial._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-teal-500 hover:underline"
                      to={`/update-testimonial/${testimonial._id}`}
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
        <p>You have no testimonials yet!</p>
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
              Are you sure you want to delete this testimonial?
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
