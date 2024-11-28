'use client';

import EquipmentForm from '@/components/forms/EquipmentForm';

export default function EquipmentPage() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Here you would typically save the data to your backend
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Equipment</h1>
      <EquipmentForm onSubmit={handleSubmit} />
    </div>
  );
}