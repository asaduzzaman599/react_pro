import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = {
  categories: [
    { name: "Todos", route: "todos" },
    { name: "Form Builder", route: "form-builder" },
    { name: "Form Preview", route: "form-preview" },
  ],
};

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `whitespace-nowrap px-2 py-2 text-sm font-medium transition border-b-2 ${
    isActive
      ? "text-indigo-600 border-indigo-600"
      : "text-gray-700 border-transparent hover:text-indigo-500"
  }`;

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs flex-col bg-white shadow-xl">
            
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col px-4 space-y-2">
              {navigation.categories.map((category) => (
                <NavLink
                  key={category.name}
                  to={`/${category.route}`}
                  className={linkClass}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </NavLink>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-start gap-6">

            <div className="text-xl font-semibold text-gray-700">
              React Pro
            </div>

            <div className="hidden lg:flex items-center gap-6">
              {navigation.categories.map((category) => (
                <NavLink
                  key={category.name}
                  to={`/${category.route}`}
                  className={linkClass}
                >
                  {category.name}
                </NavLink>
              ))}
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-500"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>

          </div>
        </nav>
      </header>
    </div>
  );
}