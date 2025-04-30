import { LoadingSpinner } from "@/components/loading-spinner"

export default function PortfolioLoading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  )
}
