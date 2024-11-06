import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const apiUrl = import.meta.env.VITE_BASE_URL;

export default function DashInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [inquiryIdToDelete, setInquiryIdToDelete] = useState("");

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/inquiry/getinquirys`);
        const data = await res.json();
        if (res.ok) {
          setInquiries(data.inquiries || []); // Ensure data is an array
          if (data.inquiries.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInquiries();
  }, []);

  const handleShowMore = async () => {
    const startIndex = inquiries.length;
    try {
      const res = await fetch(
        `${apiUrl}/api/inquiry/getinquirys?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setInquiries((prev) => [...prev, ...(data.inquiries || [])]); 
        if (data.inquiries.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteInquiry = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `${apiUrl}/api/inquiry/deleteinquiry/${inquiryIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setInquiries((prev) =>
          prev.filter((inquiry) => inquiry._id !== inquiryIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="overflow-x-scroll p-3 mt-20">
      {inquiries.length > 0 ? (
        <>
          {/* Table */}
          <table className="min-w-full table-auto border-collapse text-left shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 font-semibold text-sm text-gray-600">Name</th>
                <th className="px-4 py-2 font-semibold text-sm text-gray-600">Email</th>
                <th className="px-4 py-2 font-semibold text-sm text-gray-600">Phone</th>
                <th className="px-4 py-2 font-semibold text-sm text-gray-600">Inquiry Type</th>
                <th className="px-4 py-2 font-semibold text-sm text-gray-600">Date</th>
                <th className="px-4 py-2 font-semibold text-sm text-gray-600">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {inquiries.map((inquiry) => (
                <tr key={inquiry._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <td className="px-4 py-2 text-sm text-gray-500">{inquiry.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{inquiry.email}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{inquiry.phone}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{inquiry.inquiry_type}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {new Date(inquiry.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setInquiryIdToDelete(inquiry._id);
                      }}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Show More Button */}
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
        <p>You have no inquiries yet!</p>
      )}

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 mb-4 mx-auto" />
              <h3 className="mb-5 text-lg text-gray-500">Are you sure you want to delete this inquiry?</h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleDeleteInquiry}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
