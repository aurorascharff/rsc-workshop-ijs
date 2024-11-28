'use client';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
  mutateData: () => Promise<string>;
};

export default function ClientComponent({ children, content, mutateData }: Props) {
  // Without "use client" we cant use onClick, useState, useEffect, window.location etc
  return (
    <div className="rounded border-2 border-red-500 p-4">
      <button
        onClick={async () => {
          const data = await mutateData();
          alert(data);
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
