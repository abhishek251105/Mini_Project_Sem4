import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Users, Timer, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center py-20 px-4">
      <motion.div 
        className="max-w-4xl w-full text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-4">
          <BrainCircuit className="w-4 h-4" />
          <span>The Modern Quiz Platform</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Create, Manage, and <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
            Analyze Quizzes
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The fastest way for teachers to create interactive assessments and for students to test their knowledge seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all w-full sm:w-auto"
          >
            Teacher Login
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6">
              <PlusCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Easy Creation</h3>
            <p className="text-gray-500 text-sm">Build quizzes with multiple questions effortlessly.</p>
          </motion.div>
          
          <motion.div variants={item} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
             <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Student Friendly</h3>
            <p className="text-gray-500 text-sm">Clean, distraction-free environment for students.</p>
          </motion.div>

          <motion.div variants={item} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
             <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
              <Timer className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-time Stats</h3>
            <p className="text-gray-500 text-sm">Get immediate results and analytics per branch.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
