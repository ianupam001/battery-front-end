import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashProducts from '../components/DashProducts';
import DashSliders from '../components/DashSlider';
import DashBrands from '../components/DashBrands';
import DashTestimonials from '../components/DashTestimonials';
import DashInquirys from '../components/DashInquiries';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComp from '../components/DashboardComp';
import DashServices from '../components/DashServices';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* posts... */}
      
      {tab === 'products' && <DashProducts />}

      {tab === 'posts' && <DashPosts />}
      
      {tab === 'services' && <DashServices />}
      {tab === 'sliders' && <DashSliders />}
      {tab === 'brands' && <DashBrands />}
      {tab === 'testimonials' && <DashTestimonials />}
      {tab === 'inquiries' && <DashInquirys />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments  */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
    </div>
  );
}
