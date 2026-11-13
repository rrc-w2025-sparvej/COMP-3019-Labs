import { Router } from "express";
import { employeeController } from "../controllers/employeeController.js";

const router = Router();

// Get all employees
router.get("/", employeeController.getEmployees);

// Get all departments
router.get("/departments", employeeController.getDepartments);

// Get employees by department
router.get(
  "/department/:departmentId",
  employeeController.getEmployeesByDepartment
);

// Create a new employee
router.post("/", employeeController.createEmployee);

export default router;