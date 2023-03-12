import { Outlet } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { transform, Variants } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
export function Fspect() {
  return <Outlet></Outlet>;
}
