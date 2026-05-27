import { motion } from 'framer-motion';

export default function Closing() {
  return (
    <footer className="py-8 px-6 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm text-secondary">
            Cloud Xia · Digital Media Specialist · Auckland
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
