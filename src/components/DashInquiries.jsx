import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [inquiryIdToDelete, setInquiryIdToDelete] = useState('');

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch(`/api/inquiry/getinquirys`);
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
      const res = await fetch(`/api/inquiry/getinquirys?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setInquiries((prev) => [...prev, ...(data.inquiries || [])]); // Ensure concatenation works even if data is undefined
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
      const res = await fetch(`/api/inquiry/deleteinquiry/${inquiryIdToDelete}`, {
        method: 'DELETE',
      });
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
  // <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
  <div className='overflow-x-scroll p-3'>
      {inquiries.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
              <Table.HeadCell>Inquiry Type</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
              {inquiries.map((inquiry) => (
                <Table.Row key={inquiry._id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {inquiry.name}
                  </Table.Cell>
                  <Table.Cell>
                    {inquiry.email}
                  </Table.Cell>
                  <Table.Cell>
                    {inquiry.phone}
                  </Table.Cell>
                  <Table.Cell>
                    {inquiry.inquiry_type}
                  </Table.Cell>
                  <Table.Cell>
                    {new Date(inquiry.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setInquiryIdToDelete(inquiry._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no inquiries yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this inquiry?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteInquiry}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
