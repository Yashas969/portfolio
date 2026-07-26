import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { DynamicSEO } from '../components/common/DynamicSEO';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <DynamicSEO title="404 — Page Not Found" />
      <div className="min-h-screen flex items-center justify-center text-center px-4 pt-24">
        <div className="space-y-6 max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-white">404 — Page Not Found</h1>
          <p className="text-slate-400 text-sm">
            The page or route you are looking for does not exist or has been moved.
          </p>
          <Button
            variant="glow"
            icon={<ArrowLeft className="w-4 h-4" />}
            onClick={() => navigate('/')}
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </>
  );
};
