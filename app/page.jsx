import ClientCarousel from "./components/ClientCarousel";
import ContactForm from "./components/ConatctForm";
import HeroSection from "./components/HeroSection";
import OfferingsSection from "./components/OfferingsSection";
import OurSolutions from "./components/OurSolutions";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FeedbackCode from "./components/Feedback";
import "./globals.css"; // Ensure Tailwind styles are imported

export default function Home() {
    return (
        // Replaced inline styles with Tailwind classes
        <main >
            <HeroSection />
            <ClientCarousel />
            <OfferingsSection />
            <OurSolutions />
            <WhyChooseUsSection />
            <FeedbackCode/>
            <ContactForm />
        </main>
     
    )
}

// "use client";

// import {useSelector, useDispatch} from 'react-redux'
// // Assuming '../store/features/CounterSlice.jsx' is correct, 
// // though the path for slices is usually just '../store/features/counterSlice' or similar, 
// // and the file extension might not be needed depending on your setup.
// import {increment,decrement,reset} from '../store/features/CounterSlice.jsx'

// export default function Home() {
//     const count=useSelector((state)=>state.counter.value)
//     const dispatch=useDispatch()
    
//     return (
//         // FIX: The h1 and div should be *inside* the <main> element.
//         <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <h1 className="text-4xl font-bold mb-8">Counter: {count}</h1>
//             <div className="space-x-4">
//                 <button
//                     onClick={()=>dispatch(increment())}
//                     className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
//                 >
//                     Increment
//                 </button>
//                 <button
//                     onClick={()=>dispatch(decrement())}
//                     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//                 >
//                     Decrement
//                 </button>
//                 <button
//                     onClick={()=>dispatch(reset())}
//                     className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
//                 >
//                     Reset
//                 </button>
//             </div>
//         </main>
//     )
// }