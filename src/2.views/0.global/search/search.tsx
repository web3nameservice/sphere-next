// import { Dialog, Transition } from "@headlessui/react";
// import { FC, Fragment, KeyboardEvent, useCallback, useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaAngleRight, FaCircleNotch, FaXmark } from "react-icons/fa6";
// // import Logo from "@/src/0.resources/3.files/logo/logo_color.webp";
// const debounce = require('lodash/debounce');
// import { apiUrl } from "@/src/0.resources/2.js/0.functions/prepends";
// import { denormalise, normalise } from "@/src/0.resources/2.js/0.functions/small";
// import Link from "next/link";
// import { isRegistered } from "@/src/5.actions/tokens";

// type SearchModalProps = {
//     modalOpen: boolean;
//     setModalOpen: (value: boolean) => void;
// };

// const SearchModal: FC<SearchModalProps> = ({ modalOpen, setModalOpen }) => {
//     const [suggestions, setSuggestions] = useState<string[]>([]);
//     const [searchDomain, setSearchDomain] = useState<string>("");
//     const [searchStatus, setSearchStatus] = useState<string>("");
//     const [searchLoading, setSearchLoading] = useState<boolean>(false);

//     async function handleSearch(value: string): Promise<void> {
//         if (!value.includes(".")) {
//             value = value.replace(" ", "").toLowerCase();
//             setSearchDomain(normalise(value));
//             debouncedFind(value);
//         }
//     }

//     const debouncedFind = useCallback(debounce(async (value: string) => {
//         setSearchLoading(true);
//         getSuggestions(value);
//         setSearchStatus("");
//         let status: string;
//         if (value.length < 3 || value.length > 15) {
//             status = "Invalid";
//         } else {
//             let result = await isRegistered(value);
//             result == "true" ? status = "Registered" : status = "Available";
//         }
//         setSearchStatus(status);
//         setSearchLoading(false);
//     }, 500), []);


//     // const handleKeyDown = (event: KeyboardEvent) => {
//     //     if (event.key === 'Enter') {
//     //         setModalOpen(false);
//     //         router.push("/name/" + denormalise((searchDomain.replace(" ", "")).toLowerCase()) + ".web3");
//     //     }
//     // }

//     const clearSearch = () => {
//         setSearchDomain("");
//         setSearchStatus("");
//         setModalOpen(false);
//     }

//     const getSuggestions = async (value: string): Promise<void> => {
//         console.log("finding...");
//         const queryString = denormalise(value);

//         try {
//             const response = await fetch(`${apiUrl}/search/suggestions?query=${queryString}`);
//             const data: { value: string[] } = await response.json();

//             if (value.length === 0) {
//                 setSuggestions(data.value);
//             } else {
//                 setSuggestions([value, ...data.value]);
//             }
//         } catch (e) {
//             //
//         }
//     };

//     useEffect(() => {
//         setSearchDomain("");
//         setSearchStatus("");
//         setSearchLoading(false);
//         getSuggestions("")
//     }, [modalOpen])

//     return (
//         <Transition appear show={modalOpen} as={Fragment}>
//             <Dialog as="div" className="relative z-50" onClose={() => setModalOpen(!modalOpen)}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <div className="fixed inset-0 bg-black bg-opacity-50" />
//                 </Transition.Child>

//                 <div className="fixed inset-0 overflow-y-auto">
//                     <div className="flex min-h-full items-center justify-center p-4 text-center">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-light100 dark:bg-dark900 border border-light200 dark:border-dark800 p-6 text-left align-middle shadow-xl transition-all z-50">
//                                 <div className="px-0 md:px-3 py-6">
//                                     <div className="px-0 md:px-4 border-b-2 border-light200 dark:border-dark800">
//                                         <div className="pb-6">
//                                             <p className="text-3xl font-semibold text-black dark:text-white">Search</p>
//                                             <p className="text-md text-light500 dark:text-dark500 mt-2 font-semibold mt-2">Find and register domains</p>
//                                         </div>
//                                         <div className=" flex items-center justify-between gap-x-4 pb-4 mt-4">
//                                             <div className="flex items-center gap-x-4">
//                                                 <FaSearch className="text-xl text-light500 dark:text-dark500" />
//                                                 <input type="text" className="w-full bg-transparent outline-none text-xl font-semibold text-black dark:text-white placeholder:text-light500 dark:placeholder:text-dark500" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
//                                             </div>
//                                             <div onClick={() => clearSearch()}>
//                                                 <FaXmark className="text-xl text-light500 dark:text-dark500" />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="mt-5">
//                                         {/* <p className="text-md font-semibold text-light500 dark:text-dark500">Domains</p> */}
//                                         <div className="mt-4">
//                                             {suggestions.length == 4 ? (
//                                                 <p className="text-md font-semibold text-light500 dark:text-dark500 px-0 md:px-4 mb-2 pt-2">Popular</p>
//                                             ) : (null)}
//                                             <div>
//                                                 {suggestions.length > 0 ? (
//                                                     suggestions.map((item, index) => (
//                                                         <div key={index}>
//                                                             <GetMapping value={item} index={index} searchLoading={searchLoading} searchStatus={searchStatus} setModalOpen={setModalOpen} />
//                                                         </div>
//                                                     ))
//                                                 ) : (
//                                                     null
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     )
// }

// export default SearchModal

// type GetMappingProps = {
//     value: string;
//     index: number;
//     searchLoading: boolean;
//     searchStatus: string;
//     setModalOpen: (value: boolean) => void;
// };

// const GetMapping: FC<GetMappingProps> = ({ value, index, searchLoading, searchStatus, setModalOpen }) => {

//     return (
//         <Link href={`/name/` + value + ".web3"} onClick={() => setModalOpen(false)} className="px-0 md:px-4 py-4 flex items-center justify-between hover:bg-light100 dark:hover:bg-dark900 rounded-xl">
//             <div className="flex items-center gap-x-3 w-full">
//                 {/* <img src={Logo?.src} className="bg-black rounded-md hidden md:hidden" width={20} height={20} alt="logo" /> */}
//                 <div className="block md:flex items-center">
//                     <p className="font-semibold text-black dark:text-white text-lg">{value}</p>
//                     <p className="text-black dark:text-white text-lg">.web3</p>
//                 </div>
//             </div>
//             <div className="flex items-center justify-end gap-x-4">
//                 {index == 0 ? (
//                     <div className="flex justify-end">
//                         <div style={{ display: searchLoading ? "block" : "none" }}>
//                             <FaCircleNotch className="text-light500 dark:text-dark500 animate-spin text-xl" />
//                         </div>
//                         <div className={`${searchStatus == "Invalid" ? "bg-light300 dark:bg-dark700" : searchStatus == "Registered" ? "bg-blue-100 dark:bg-blueBg" : searchStatus == "Available" ? "bg-yellow-100 dark:bg-yellowBg" : ""} px-4 py-1 rounded-full`} style={{ display: searchStatus != "" ? "block" : "none" }}>
//                             <p style={{ display: searchLoading ? "none" : "block" }} className={`text-sm md:text-md font-semibold ${searchStatus == "Invalid" ? "text-light500 dark:text-dark500" : searchStatus == "Registered" ? "text-blue-500" : "text-yellow-500"}`}>{searchStatus}</p>
//                         </div>
//                     </div>
//                 ) : (null)}
//                 <FaAngleRight className="text-xl text-light500 dark:text-dark500" />
//             </div>
//         </Link>
//     )
// }