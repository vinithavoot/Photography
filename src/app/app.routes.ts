import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BookingComponent } from './booking/booking.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path: '', component: AppComponent }, // Show AppComponent at root
    { path: 'home', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'testimonials', component: TestimonialComponent },
    { path: 'blog', component: BlogComponent} // Route to HomeComponent
  ];