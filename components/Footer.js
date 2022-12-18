function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800  ">
        <h5 className="font-bold">ABOUT</h5>
        <p className="hover:hover:underline cursor-pointer">Careers</p>
        <p className="hover:hover:underline cursor-pointer">Privacy Policy</p>
        <p className="hover:hover:underline cursor-pointer">Terms of Service</p>
        <p className="hover:hover:underline cursor-pointer">
          Investor Relations
        </p>
        <p className="hover:hover:underline cursor-pointer">
          Intellectual Property Claims
        </p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p className="hover:hover:underline cursor-pointer">Accessibility</p>
        <p className="hover:hover:underline cursor-pointer">
          This is not a real site
        </p>
        <p className="hover:hover:underline cursor-pointer">
          Its a pretty awesome clone
        </p>
        <p className="hover:hover:underline cursor-pointer">
          Referrals accepted
        </p>
        <p className="hover:hover:underline cursor-pointer">HasanFam</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p className="hover:hover:underline cursor-pointer">Events</p>
        <p className="hover:hover:underline cursor-pointer">Blog</p>
        <p className="hover:hover:underline cursor-pointer">Invite a Friend</p>
        <p className="hover:hover:underline cursor-pointer">Become a Host</p>
        <p className="hover:hover:underline cursor-pointer">Affiliates</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p className="hover:hover:underline cursor-pointer">Help & Support</p>
        <p className="hover:hover:underline cursor-pointer">Trust & Safety</p>
        <p className="hover:hover:underline cursor-pointer">
          Programming & Tech
        </p>
        <p className="hover:hover:underline cursor-pointer">Business</p>
        <p className="hover:hover:underline cursor-pointer">Lifestyle</p>
      </div>
    </div>
  );
}

export default Footer;
