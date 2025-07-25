"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Instrument } from "@/data/instruments";
import { InstrumentType, InstrumentBrand } from "@/lib/data";

interface AdminTableProps {
  instruments: Instrument[];
  types: InstrumentType[];
  brands: InstrumentBrand[];
}

export default function AdminTable({
  instruments,
  types,
  brands,
}: AdminTableProps) {
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  const [selectedType, setSelectedType] = useState<InstrumentType | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<InstrumentBrand | null>(null);

  return (
    <Tabs defaultValue="instruments">
      <TabsList>
        <TabsTrigger value="instruments">Instrumentos</TabsTrigger>
        <TabsTrigger value="types">Tipos</TabsTrigger>
        <TabsTrigger value="brands">Marcas</TabsTrigger>
      </TabsList>
      <TabsContent value="instruments">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Accesorios</TableHead>
              <TableHead>Foto</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instruments.map((instrument) => (
              <TableRow key={instrument.id}>
                <TableCell>{instrument.name}</TableCell>
                <TableCell>{instrument.brand}</TableCell>
                <TableCell>{instrument.type}</TableCell>
                <TableCell>{instrument.color}</TableCell>
                <TableCell>{instrument.price}</TableCell>
                <TableCell>{instrument.accessories.join(", ")}</TableCell>
                <TableCell><img src={instrument.photo} alt={instrument.name} className="w-16 h-16 object-cover" /></TableCell>
                <TableCell>{instrument.descripcion}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedInstrument(instrument)}>Ver/Editar</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Instrumento</DialogTitle>
                      </DialogHeader>
                      {selectedInstrument && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" defaultValue={selectedInstrument.name} />
                          </div>
                          <div>
                            <Label htmlFor="brand">Marca</Label>
                            <Input id="brand" defaultValue={selectedInstrument.brand} />
                          </div>
                          <div>
                            <Label htmlFor="type">Tipo</Label>
                            <Input id="type" defaultValue={selectedInstrument.type} />
                          </div>
                          <div>
                            <Label htmlFor="color">Color</Label>
                            <Input id="color" defaultValue={selectedInstrument.color} />
                          </div>
                          <div>
                            <Label htmlFor="price">Precio</Label>
                            <Input id="price" defaultValue={selectedInstrument.price} />
                          </div>
                          <div>
                            <Label htmlFor="accessories">Accesorios</Label>
                            <Input id="accessories" defaultValue={selectedInstrument.accessories.join(", ")} />
                          </div>
                          <div>
                            <Label htmlFor="photo">Foto (URL)</Label>
                            <Input id="photo" defaultValue={selectedInstrument.photo} />
                          </div>
                          <div>
                            <Label htmlFor="description">Descripción</Label>
                            <Input id="description" defaultValue={selectedInstrument.descripcion} />
                          </div>
                          <Button>Guardar</Button>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="ml-2">Eliminar</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta acción no se puede deshacer.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Aceptar</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="types">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Nombre Completo</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {types.map((type) => (
              <TableRow key={type.id}>
                <TableCell>{type.name}</TableCell>
                <TableCell>{type.name_complete}</TableCell>
                <TableCell>{type.descripcion}</TableCell>
                <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedType(type)}>Ver/Editar</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Tipo</DialogTitle>
                      </DialogHeader>
                      {selectedType && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" defaultValue={selectedType.name} />
                          </div>
                          <div>
                            <Label htmlFor="name_complete">Nombre Completo</Label>
                            <Input id="name_complete" defaultValue={selectedType.name_complete} />
                          </div>
                          <div>
                            <Label htmlFor="description">Descripción</Label>
                            <Input id="description" defaultValue={selectedType.descripcion} />
                          </div>
                          <Button>Guardar</Button>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="ml-2">Eliminar</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta acción no se puede deshacer.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Aceptar</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="brands">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brands.map((brand) => (
              <TableRow key={brand.id}>
                <TableCell>{brand.name}</TableCell>
                <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedBrand(brand)}>Ver/Editar</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Marca</DialogTitle>
                      </DialogHeader>
                      {selectedBrand && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" defaultValue={selectedBrand.name} />
                          </div>
                          <Button>Guardar</Button>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="ml-2">Eliminar</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta acción no se puede deshacer.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Aceptar</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
