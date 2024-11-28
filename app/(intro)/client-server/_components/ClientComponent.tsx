'use client';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export default function ClientComponent({ children, content }: Props) {
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
      {children}
      {content}
    </div>
  );
}
