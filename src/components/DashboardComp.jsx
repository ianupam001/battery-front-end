import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function DashboardComp() {
  
  return (
    <div className="p-3 md:mx-auto flex justify-center items-center min-h-screen">
     <h1 className="text-gray-600">
      Hello
     </h1>
     <img className="w-32" src="/assets/images/800bbattery.png" alt="logo" />
    </div>
  );
}
