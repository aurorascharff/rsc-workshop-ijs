'use client';

export default function ClientComponent() {
  // Without "use client" we cant use onClick, useState, useEffect, window.location etc
  return (
    <div className="rounded border-2 border-red-500 p-4">
      <button
        onClick={() => {
          alert('Hello');
        }}
      >
        Click me
      </button>
      ClientComponent
    </div>
  );
}
