"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST',
    });

    if (res.ok) {
      router.push('/login');
    } else {
      alert('Error al cerrar sesión');
    }
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Cerrar Sesión
    </Button>
  );
}
