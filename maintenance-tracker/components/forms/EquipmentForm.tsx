import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { equipmentSchema } from "@/lib/validation/equipment";
import { Equipment } from "@/types/equipment";

type FormData = z.infer<typeof equipmentSchema>;
