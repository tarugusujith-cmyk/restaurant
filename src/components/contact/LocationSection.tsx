import { MapPin } from "lucide-react";
import mapImage from "../../assets/contact-page/map.png";
import IconImage from "../../assets/contact-page/img.jpg";

function LocationSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-x-0 top-10 bottom-8 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${mapImage})` }}
      />
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto w-full max-w-[900px] rounded-2xl bg-white p-5 shadow-xl sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="h-[150px] w-full max-w-[165px] shrink-0 overflow-hidden rounded-[13px]">
              <img
                src={IconImage}
                alt="Delizioso Restaurant"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h2 className="font-serif text-2xl font-semibold leading-tight text-[#311f09]">
                Delizioso Restaurant
              </h2>
              <p className="mt-3 text-base leading-6 text-[#311f09]">
                Bronx, NY 10463, Amerika Serikat
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=3247+Johnson+Ave%2C+Bronx%2C+NY+10463"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-medium text-[#ff8a00] hover:underline"
              >
                Open location in Maps
              </a>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=3247+Johnson+Ave%2C+Bronx%2C+NY+10463"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Delizioso location in Google Maps"
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#fff1df] transition hover:scale-105 sm:h-[121px] sm:w-[121px]"
            >
              <MapPin size={48} strokeWidth={1.8} className="text-[#ff8a00]" />
            </a>
          </div>

          {/* Details box with responsive table */}
          <div className="mt-8 rounded-2xl border border-[#eee7df] bg-[#faf9f7] p-4 sm:p-6">
            <h3 className="font-serif text-xl font-semibold text-[#311f09]">Details</h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#e8dfd5]">
                    <th className="px-3 py-3 font-semibold text-[#311f09]">Information</th>
                    <th className="px-3 py-3 font-semibold text-[#311f09]">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#eee7df]">
                    <td className="px-3 py-3 text-[#77716c]">Address</td>
                    <td className="px-3 py-3 text-[#311f09]">3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</td>
                  </tr>
                  <tr className="border-b border-[#eee7df]">
                    <td className="px-3 py-3 text-[#77716c]">Email</td>
                    <td className="px-3 py-3">
                      <a href="mailto:delizioso@gmail.com" className="text-[#ff8a00] hover:underline">
                        delizioso@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-[#77716c]">Phone</td>
                    <td className="px-3 py-3">
                      <a href="tel:+12345678901" className="text-[#ff8a00] hover:underline">
                        +123 4567 8901
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
