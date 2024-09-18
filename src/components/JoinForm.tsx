import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider, Input, Textarea, RadioGroup, Radio, Select, SelectItem} from "@nextui-org/react";
import { useState } from "react";

interface buttonProps {
    className: string;
    text: string;
}

export default function JoinForm({className, text}: buttonProps) {
  const radios = [
    {key: 'a', label: 'Ser parte de la comunidad.'},
    {key: 'b', label: 'Ser miembro mediante una membresía.'},
    {key: 'c', label: 'Ser parte del comité directivo.'},
  ]
  const roles = [
    {key: 'tes', label: 'Tesorero'},
    {key: 'sec', label: 'Secretario'},
    {key: 'wm', label: 'Web Master'},
    {key: 'mk', label: 'Marketing'},
    {key: 'dis', label: 'Diseñador'},
  ]

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [interes, setInteres] = useState("");
  const [participacion, setParticipacion] = useState("");
  const [rol, setRol] = useState("");

  const [errors, setErrors] = useState({
    nombre: false,
    email: false,
    telefono: false,
    interes: false,
    participacion: false,
    rol: false
  });

  const clearFields = () => {
    setNombre("");
    setEmail("");
    setTelefono("");
    setInteres("");
    setParticipacion("");
    setRol("");
    setErrors({
      nombre: false,
      email: false,
      telefono: false,
      interes: false,
      participacion: false,
      rol: false
    });
  };

  const validateFields = () => {
    const newErrors = {
      nombre: nombre.trim() === "",
      email: email.trim() === "",
      telefono: telefono.trim() === "",
      interes: interes.trim() === "",
      participacion: participacion === "",
      rol: participacion === 'c' && rol === ""
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = () => {
    if (validateFields()) {
      const formData = {
        nombre,
        email,
        telefono,
        interes,
        participacion,
        rol: participacion === 'c' ? rol : 'N/A'
      };
      console.log(formData);
      clearFields();
      onOpenChange();
    } else {
      console.log("Por favor, complete todos los campos requeridos.");
    }
  };

  return (
    <>
      <button onClick={onOpen} className={className}>{text}</button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        backdrop="blur" 
        className="bg-white" 
        size="xl" 
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sé parte de IEEE Student Branch - ESTl</ModalHeader>
              <ModalBody>
                <p className="text-sm">
                  Este formulario tiene el objetivo de determinar tu interés 
                  en unirte a la IEEE Student Branch - ESTI. Como miembro, tendrás la oportunidad de colaborar 
                  con otros estudiantes apasionados por la carrera. Además, podrás participar en eventos, 
                  talleres y proyectos que te permitirán desarrollar tus habilidades y expandir tu red 
                  profesional.
                </p>
              </ModalBody>
              <Divider className="w-[95%] block ml-3 lg:ml-4 my-4 bg-gray-400"/>
              <ModalBody>
                <div className="flex flex-col lg:flex-row lg:gap-3 gap-y-3">
                  <Input 
                    label='Nombre completo' 
                    isRequired 
                    size="sm"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    isInvalid={errors.nombre}
                    errorMessage={errors.nombre ? "Este campo es requerido" : ""}
                  />
                  <Input 
                    label='Correo electrónico' 
                    type="email"
                    isRequired 
                    size="sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={errors.email}
                    errorMessage={errors.email ? "Este campo es requerido" : ""}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <Input 
                    label='Número de teléfono' 
                    isRequired 
                    size="sm" 
                    className="lg:w-[50%]"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    isInvalid={errors.telefono}
                    errorMessage={errors.telefono ? "Este campo es requerido" : ""}
                  />
                  <Textarea 
                    label='¿Por qué estás interesado en formar parte de la rama estudiantil?' 
                    isRequired
                    value={interes}
                    onChange={(e) => setInteres(e.target.value)}
                    isInvalid={errors.interes}
                    errorMessage={errors.interes ? "Este campo es requerido" : ""}
                  />
                </div>
                <div className="flex flex-col">
                  <RadioGroup 
                    label='¿De qué manera te gustaría participar en la IEEE Student Branch - ESTI?' 
                    size="sm" 
                    className="text-sm mt-3" 
                    isRequired 
                    value={participacion} 
                    onValueChange={setParticipacion}
                    isInvalid={errors.participacion}
                    errorMessage={errors.participacion ? "Este campo es requerido" : ""}
                  >
                    {radios.map((radio) => (
                      <Radio key={radio.key} value={radio.key}>
                        {radio.label}
                      </Radio>
                    ))}
                  </RadioGroup>
                </div>
                <div className="flex flex-col mt-6">
                  <p className="text-sm text-gray-500 mb-3">Si seleccionaste "Ser parte del comité directivo", ¿qué rol te gustaría ocupar?</p>
                  <Select 
                    label='Selecciona un rol' 
                    isRequired 
                    isDisabled={participacion !== 'c'}
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                    isInvalid={errors.rol}
                    errorMessage={errors.rol ? "Este campo es requerido" : ""}
                  >
                    {roles.map((rol) => (
                      <SelectItem key={rol.key} value={rol.key}>
                        {rol.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose} className="text-white">
                  Cerrar
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}