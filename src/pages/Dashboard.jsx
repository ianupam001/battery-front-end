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
import DashMetaDeta from '../components/DashMetaDeta';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('dash');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    } else {
      setTab('dash'); 
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
     
        <DashSidebar />
      </div>

      <div className="flex-1 p-4">
        
        {tab === 'profile' && <DashProfile />}
        {tab === 'posts' && <DashPosts />}
        {tab === 'products' && <DashProducts />}
        {tab === 'services' && <DashServices />}
        {tab === 'sliders' && <DashSliders />}
        {tab === 'brands' && <DashBrands />}
        {tab === 'testimonials' && <DashTestimonials />}
        {tab === 'inquiries' && <DashInquirys />}
        {tab === 'metadata' && <DashMetaDeta />}
        {tab === 'users' && <DashUsers />}
        {tab === 'comments' && <DashComments />}
        {tab === 'dash' && <DashboardComp />}
      </div>
    </div>
  );
}
