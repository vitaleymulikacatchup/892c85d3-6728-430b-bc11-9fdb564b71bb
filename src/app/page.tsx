"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Camera, Clock, Heart, Image, Mail, MessageCircle, Package, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="animatedGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Gallery", id: "gallery" },
            { name: "Categories", id: "categories" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="PhotoVault"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Capturing Life's Beautiful Moments"
          description="Professional photography services for weddings, portraits, events, and more. Browse our stunning gallery collection."
          tag="Photo Gallery"
          tagIcon={Camera}
          buttons={[
            { text: "Browse Gallery", href: "gallery" },
            { text: "Book Session", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/gb2aeb931e2b9ef46527a2f0c5701c043a7fb4be58bc4fa5742f20c1bb0413e7c94e49187cb34d006f361ebc245727bf7c617ad49f4c15dd676e9108c4b3055f5_1280.jpg",
              imageAlt: "Professional photography"
            },
            {
              imageSrc: "https://pixabay.com/get/g11afbf8134d9777b841a2cbfbf201dcbd365abc26f4d3ca3f98aaa1c1f40dda0c8b4d4c9c7a372114079caeea0a1734bc586f1a7cde1517c914c72d7e9f050d0_1280.jpg",
              imageAlt: "Portrait photography"
            },
            {
              imageSrc: "https://pixabay.com/get/gd5e9808e18b5c0a1c9ee397bd361708994d7bfb49b30b81d868f946c44895c445adc0cb559c5cf5599e936942ed793417a741e99abbf7b4458b42d4f4290ad30_1280.jpg",
              imageAlt: "Wedding photography"
            },
            {
              imageSrc: "https://pixabay.com/get/gd8f6b3fb36a99572830409038629a2d70fa7b8a53d0af7e44350ff941b3df99929dce627d376888c539d8c7c6c1407305af7d5078f66424809f7038621296d0c_1280.jpg",
              imageAlt: "Nature photography"
            },
            {
              imageSrc: "https://pixabay.com/get/gafb3c353639ec0672c9cc42a486a6a5abbd39d7564963e96f28d5eb4e328cffc777a4076d1f6f7e5457da1433c95617025420e0d733ec4588ab3094d1546105d_1280.jpg",
              imageAlt: "Street photography"
            },
            {
              imageSrc: "https://pixabay.com/get/gaaf722dc8f533df95e70e63385aeeb452280880750e2aad1f6d78c742511a3bf2c7d528891f06ebc0b34b29dbdb9523181b2ad14485198173f4c2d54cb223dc7_1280.jpg",
              imageAlt: "Macro photography"
            },
            {
              imageSrc: "https://pixabay.com/get/g9721a8a97290af373d571ddaa5fab114dedc8ef923e9b7d6c44989e413e524ce77df49de256ee2f5fa574a4adbfa8bf39e54aa526b98afa2086843f8530fdcb7_1280.jpg",
              imageAlt: "Architectural photography"
            }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureCardOne
          title="Featured Photography"
          description="Explore our most stunning captures across different photography styles and occasions"
          tag="Gallery Highlights"
          tagIcon={Image}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          features={[
            {
              title: "Wedding Celebrations",
              description: "Timeless moments from your special day captured with artistic precision",
              imageSrc: "https://pixabay.com/get/ge606b1d95b8f8ea6544f816c346dba6611d54120a188e9ee0879dcf9ba5f1f33e2912b507a47a0ba273abef6395b36de9ea94a3a8bb6c9e2cbba7512d0ced706_1280.jpg",
              imageAlt: "Wedding photography",
              button: { text: "View Collection", href: "wedding" }
            },
            {
              title: "Landscape Beauty",
              description: "Breathtaking natural scenes and golden hour landscapes",
              imageSrc: "https://pixabay.com/get/g033b1acccbb4dcf4fcf23c2894c7db598f63e8012eb4577445e7720b9c3dcb4606e0e61131312fdb99bff44c4d119408fba615aa92f2d05490198cc829004877_1280.jpg",
              imageAlt: "Landscape photography",
              button: { text: "Explore Nature", href: "landscape" }
            },
            {
              title: "Portrait Sessions",
              description: "Professional headshots and personal portraits with perfect lighting",
              imageSrc: "https://pixabay.com/get/gcf6e66af311495cc8d4cb529e93e0a8fdae437ec03e30c28ba0616a10f9c6bf543ef4fdcfdc340787fe47f3a580acbed01a8ba78e0b672a1bf5a7f261703d67a_1280.jpg",
              imageAlt: "Portrait photography",
              button: { text: "Book Portrait", href: "contact" }
            },
            {
              title: "Event Coverage",
              description: "Dynamic event photography capturing energy and emotions",
              imageSrc: "https://pixabay.com/get/g26d2711d18c49cbb3214d06bd04930f5d60dcc2937d85ded6b287c301670e442a3739dfa5ebfd14bc2c60f83b8f13886dc80523eb3d370b1a811dafe597f12e1_1280.jpg",
              imageAlt: "Event photography",
              button: { text: "See Events", href: "events" }
            }
          ]}
        />
      </div>

      <div id="categories" data-section="categories">
        <ProductCardOne
          title="Photography Services"
          description="Discover our range of professional photography packages and sessions"
          tag="Services"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          products={[
            {
              id: "wedding",
              name: "Wedding Photography",
              price: "From $2,500",
              imageSrc: "https://pixabay.com/get/g659c4db4b2e0ae8e2bade5a389c7c1d46b14219ec98c9f82941b05000f1800b23ea7ff39601e675e7dcd6d6b782d1d1f62ec9c053d629bf95fcb0219ff25fd34_1280.jpg",
              imageAlt: "Wedding photography package"
            },
            {
              id: "portrait",
              name: "Portrait Session",
              price: "From $350",
              imageSrc: "https://pixabay.com/get/gd57187c9163b67ec5546cfa57dbd6ff0b3f9edecfdb96c6581325ecc461b4c2fdcca40636e726826c670d7ba7b65c2771bc12a745a2424fe8311343dedb3b86b_1280.jpg",
              imageAlt: "Portrait photography session"
            },
            {
              id: "landscape",
              name: "Landscape Prints",
              price: "From $150",
              imageSrc: "https://pixabay.com/get/ga8b1312aea6b3f545204b986eb23de593414736a6df75cf209407898cdc9693f916185d36133e706d1866d974b2e7482cef11f564f8b818711d530f7f4e3a29f_1280.jpg",
              imageAlt: "Landscape photography prints"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe photography is about capturing authentic moments that tell your unique story. Our passion drives us to create timeless images that preserve your most precious memories."
          features={[
            {
              icon: Camera,
              title: "Professional Equipment",
              description: "State-of-the-art cameras and lighting equipment to ensure every shot is perfect and captures the finest details."
            },
            {
              icon: Heart,
              title: "Passionate Approach",
              description: "We approach every session with genuine care and creativity, making you feel comfortable while capturing natural emotions."
            },
            {
              icon: Award,
              title: "Award-Winning Quality",
              description: "Our work has been recognized by photography associations and featured in leading wedding and lifestyle publications."
            },
            {
              icon: Clock,
              title: "Timely Delivery",
              description: "Professional editing and delivery of your photos within 2-3 weeks, with sneak peeks available within 48 hours."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Read testimonials from couples, families, and professionals who trusted us with their special moments"
          tag="Client Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Bride",
              testimonial: "The wedding photos exceeded all our expectations. Every moment was captured beautifully, and the attention to detail was incredible. We'll treasure these memories forever.",
              imageSrc: "https://pixabay.com/get/g5766971d8b68743e66aaf300953c70a7416c3ce011594423bed895a852454bf7c4708d69c8e0c21b9926d29c9bfd904238cf37c1f00f0eff6b0ee6a349ae190e_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Professional",
              testimonial: "Outstanding professional headshots that perfectly represent my brand. The photographer made me feel comfortable and the results were better than I imagined.",
              imageSrc: "https://pixabay.com/get/g791d6b535f71897ee2b30e9f4189b92fb12b54e13b6f849fdc39db2094b0a3dd07dafc8dd5a635a40f26320c81ae1711e23e231520965adddf1a6be2fa6b8628_1280.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "The Williams Family",
              role: "Family Portrait Session",
              testimonial: "Amazing family photos that truly captured our personalities. The kids were engaged throughout the session and the final images are absolutely beautiful.",
              imageSrc: "https://pixabay.com/get/g795941d164a63c0d014074f598e423c86ff01bebdb549d8a39ddcf18ec47d8eee226babf2c72282fc872b397d3876f4969f5889ba449815d7babcecbabb56c56_1280.jpg",
              imageAlt: "Williams Family"
            },
            {
              id: "4",
              name: "Emma & David",
              role: "Engagement Session",
              testimonial: "Our engagement photos are stunning! The photographer found the most beautiful locations and captured our love story perfectly. Highly recommended!",
              imageSrc: "https://pixabay.com/get/g9fe4609a2622f9c1143c0f1aedf5566a14c63f010e27045e8d19845cc02efa8bfa482dae40adaef22c8c66b45711928d3ab43d5d4b67d7187c70897978f1d984_1280.jpg",
              imageAlt: "Emma and David"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              role: "Corporate Client",
              testimonial: "Professional, creative, and delivered exactly what we needed for our marketing materials. The photos elevated our brand image significantly.",
              imageSrc: "https://pixabay.com/get/g0ebb966f05055fe76c1711a79aad59bb7b8a77a0645a121c6142c5673fe307f2ee5480390c78556cb06cb08f008427b521d56e7d571073ffc19be7e1d4507e89_1280.png",
              imageAlt: "Jessica Martinez"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet the Photographer"
          description="The creative vision behind every captured moment"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          members={[
            {
              id: "1",
              name: "Alex Rivera",
              role: "Lead Photographer",
              imageSrc: "https://pixabay.com/get/g8ed68a48533399704dcae85fecc61abd3165d18d84b9bc92b45583b93c5ffa54a70954f8f3c0ee49cf9bbfbc62f5c56bc287b0e91ccab358fc99c0dd7b446731_1280.jpg",
              imageAlt: "Alex Rivera, professional photographer"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Capture Your Moments?"
          description="Contact us to discuss your photography needs and book your session. We'll create beautiful memories together."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Get Quote"
          termsText="By submitting, you agree to our terms and conditions. We respect your privacy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="PhotoVault"
          copyrightText="© 2025 | PhotoVault Photography"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Wedding Photography", href: "wedding" },
                { label: "Portrait Sessions", href: "portrait" },
                { label: "Event Coverage", href: "events" },
                { label: "Landscape Prints", href: "landscape" }
              ]
            },
            {
              title: "Gallery",
              items: [
                { label: "Featured Photos", href: "gallery" },
                { label: "Recent Work", href: "recent" },
                { label: "Client Albums", href: "albums" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Testimonials", href: "testimonials" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}