import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashBrand() {
  const { currentUser } = useSelector((state) => state.user);
  const [userBrand, setUserBrand] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [brandIdToDelete, setServiceIdToDelete] = useState('');
  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const res = await fetch(`/api/brand/getbrands?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserBrand(data.brands);
          if (data.brands.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchBrand();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userBrand.length;
    try {
      const res = await fetch(
        `/api/brand/getbrands?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserBrand((prev) => [...prev, ...data.brands]);
        if (data.brands.length < 9) {
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
        `/api/brand/deletebrand/${brandIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserBrand((prev) =>
          prev.filter((brand) => brand._id !== brandIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    // <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
    <div className='overflow-x-scroll p-3'>
      {currentUser.isAdmin && userBrand.length > 0 ? (
        <>
          <div className=''>

            {currentUser.isAdmin && (
              <Link to={`/create-brand`}>
                <Button
                  type='button'
                  gradientDuoTone='purpleToPink'
                  className='mb-3'
                >
                  Create New Brand
                </Button>
              </Link>
            )}

          </div>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Brand image</Table.HeadCell>
              <Table.HeadCell>Brand title</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userBrand.map((brand) => (
              <Table.Body className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date(brand.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/brand/${brand.slug}`}>
                      <img
                        src={brand.image}
                        alt={brand.title}
                        className='w-20 h-10 object-cover bg-gray-500'
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                      {brand.title}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setServiceIdToDelete(brand._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='text-teal-500 hover:underline'
                      to={`/update-brand/${brand._id}`}
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
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no brands yet!</p>
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
              Are you sure you want to delete this brand?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteService}>
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
