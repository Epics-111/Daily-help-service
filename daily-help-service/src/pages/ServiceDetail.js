import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Fetch service details (mocking with static data for now)
    const serviceData = {
      id,
      name: "Plumbing",
      description: "Expert plumbing services for all types of repairs and installations.",
      price: "$50 per hour",
      provider: "John Doe",
      contact: "johndoe@example.com",
    };
    setService(serviceData);
  }, [id]);

  if (!service) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center">{service.name}</h2>
      <p className="mt-4 text-gray-600">{service.description}</p>
      <p className="mt-2 font-bold">Price: {service.price}</p>
      <p className="mt-2">Provided by: {service.provider}</p>
      <p className="mt-1">Contact: {service.contact}</p>
    </div>
  );
};

export default ServiceDetail;
