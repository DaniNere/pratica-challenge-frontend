export interface Technician {
  id?: number;
  fullName: string; 
  email: string;
  phone: string;    
  zipCode: string;  
  city: string;     
  state: string; 
  isDeleted?: boolean; 
  createdAt?: Date;  
  updatedAt?: Date;   
}


export type CreateTechnicianPayload = Omit<Technician, 'id' | 'isDeleted' | 'createdAt' | 'updatedAt'>;

export type UpdateTechnicianPayload = Omit<Technician, 'id' | 'createdAt' | 'updatedAt' | 'isDeleted'>;


export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
  mode: "add" | "edit";
  initialData?: Technician | null;
}
