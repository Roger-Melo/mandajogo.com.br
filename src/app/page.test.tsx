import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import HomePage from "@/app/page"

jest.mock("@/components/ui/carousel", () => ({
  Carousel: ({ children }: Readonly<{ children: React.ReactNode }>) => <div data-testid="carousel">{children}</div>,
  CarouselContent: ({ children }: Readonly<{ children: React.ReactNode }>) => <div data-testid="carousel-content">{children}</div>,
  CarouselItem: ({ children }: Readonly<{ children: React.ReactNode }>) => <div data-testid="carousel-item">{children}</div>,
  CarouselPrevious: () => <button data-testid="carousel-previous">Previous</button>,
  CarouselNext: () => <button data-testid="carousel-next">Next</button>,
}))

describe("HomePage", () => {
  it("should render the main heading", () => {
    render(<HomePage />)
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
