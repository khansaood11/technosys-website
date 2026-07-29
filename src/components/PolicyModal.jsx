import React, { useState } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, AlertCircle, Send, ArrowRight } from 'lucide-react';

export default function PolicyModal({ isOpen, initialPolicy, onClose }) {
  const [activePolicy, setActivePolicy] = useState(initialPolicy || 'Terms & Conditions');
  const [showRefundForm, setShowRefundForm] = useState(false);
  const [refundData, setRefundData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    connId: '',
    planType: 'Annual Service Plan',
    reason: 'Service not working properly',
    issueDesc: '',
    bankName: '',
    accNo: '',
    ifsc: '',
    upi: '',
    ack1: false,
    ack2: false
  });
  const [refundSubmitted, setRefundSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleRefundSubmit = (e) => {
    e.preventDefault();
    if (!refundData.ack1 || !refundData.ack2) {
      alert("Please acknowledge all required policy checkboxes to proceed.");
      return;
    }
    setRefundSubmitted(true);
  };

  const termsText = `
Effective Date: 25/01/2025 | Version: 1.0
Sparkline Technosys Pvt. Ltd. (STPL) Terms & Conditions

1. Introduction
1.1 These Terms and Conditions (“Terms”) govern the use of services provided by Sparkline Technosys Pvt. Ltd. (STPL), including internet services, IT infrastructure solutions, and other related services. By using our services, you agree to comply with these Terms and the rules, policies, and guidelines set forth by STPL.
1.2 By accessing or using any of our services, you (“Customer”) agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, you are not authorized to use our services, and you should discontinue use immediately.
1.3 STPL reserves the right to modify, update, or amend these Terms at any time, without prior notice. In such cases, customers will be notified of any significant changes. Continued use of our services after such modifications constitutes your acceptance of the updated Terms.

2. Service Agreement
2.1 Provision of Services: STPL will provide the services as outlined in the individual Service Agreement (“Agreement”) signed by the Customer.
2.2 Customer Obligations: The Customer agrees to comply with all terms set forth in the Agreement as well as these Terms.
2.3 Complete Understanding: The Agreement, along with these Terms and Conditions, constitute the complete and binding understanding between the Customer and STPL.

3. Customer Responsibilities
3.1 Equipment Usage: Customers are responsible for the safe handling, operation, and protection of hardware (routers, modems, switches, ONTs) installed at their premises. In case of loss or damage due to customer negligence, repair or replacement costs will apply.
3.2 Compliance with Laws: Services must be used strictly in compliance with privacy laws, data security regulations, IT Act 2000, and intellectual property laws.
3.3 Unauthorized Activities: Strictly prohibited: Unauthorized network access, distribution of malicious software/viruses, fraud, spamming, phishing, or illegal downloads. Violations lead to immediate termination and legal action.

4. Payment Terms
4.1 Billing & Payments: Payments must be made according to the agreed billing cycle (Monthly/Annual).
4.2 Due Dates & Late Fees: Invoices must be paid within the specified period. Late payment interest and penalties apply for overdue amounts, potentially leading to service suspension.
4.3 Fee Revisions: STPL reserves the right to revise service fees with prior notice via email, SMS, or website.

5. Privacy and Data Security
5.1 Data Protection: Personal and service data is collected and processed securely per STPL Privacy Policy and never sold to third parties.
5.2 Security Measures: Industry-standard SSL/TLS encryption, AES-256 data storage, firewalls, and access control mechanisms are enforced.
5.3 Customer Responsibilities: Customers must secure their local Wi-Fi networks with strong passwords and 2FA.

6. Service Availability and Limitations
6.1 Service Reliability: STPL strives for 99.9% uptime SLA, though maintenance and force majeure events may cause occasional downtime.
6.2 Force Majeure: Outages due to natural disasters, cable cuts, cyberattacks, or government mandates will be resolved on priority.
6.3 No Liability for Interruption: STPL is not liable for indirect financial losses due to temporary service disruptions.

7. Liability and Limitations
7.1 Limit of Liability: STPL's total liability is limited to the total amount paid by the customer for the affected service during the billing cycle.
7.2 Exclusions: Excludes indirect, consequential, or incidental business profit losses.

8. Service Termination
8.1 Customer Termination: Written notice required (7 days for monthly, 30 days for annual).
8.2 STPL Termination: Rights reserved for non-payment, unauthorized reselling, or illegal usage.
8.3 Reactivation: Service reactivation fees may apply after fulfilling pending dues.

9. Modifications to Terms
STPL reserves the right to update policies periodically. Continued usage constitutes acceptance.

10. Dispute Resolution & Arbitration
Disputes shall be settled through negotiation or arbitration under Indian laws. Arbitration proceedings shall be conducted exclusively in Ankleshwar, Gujarat.

11. Governing Law & Jurisdiction
Governed by laws of India. Legal jurisdiction belongs exclusively to the courts of Ankleshwar, Gujarat.

12. Contact Information
Email: sales@technosysonline.com | Phone: +91 9998259045, +91 6355755910, +91 7043539045
Corporate Office: 315, Golden Square, Valia Road, Near Jayaben Modi Hospital, Ankleshwar – 393002
Registered Office: C-18/19, First Floor, Amardeep Complex, Rajpipla Road, Ankleshwar – 393002
  `;

  const refundPolicyText = `
Effective Date: 25/01/2025 | Version: 1.0
Sparkline Technosys Pvt. Ltd. (STPL) Refund and Cancellation Policy

1. Introduction
This Refund and Cancellation Policy outlines the terms for requesting refunds for internet and IT services provided by STPL.

2. Refund Eligibility Rules
2.1 Annual Service Customers:
• Eligible to request a refund within 3 months from registration date.
• Requires approval from Technical Head of STPL.
• Approved refunds are processed within 30 days after deducting installation charges and applicable GST.

2.2 Monthly Service Customers:
• Eligible to request a refund within 7 days from activation date.
• Requires approval from Technical Head of STPL.
• Approved refunds are processed within 15 days after necessary deductions.

3. Non-Refundable Fees
• One-time Installation & Cabling Charges
• GST and Government Taxes
• Third-Party Service Fees incurred on behalf of customer

4. Service Cancellation Notice Period
• Monthly Plan: 7-day notice period before the next billing cycle.
• Annual Plan: 30-day notice period before contract end date.
  `;

  return (
    <div className="modal-overlay">
      <div className="glass-panel w-full max-w-4xl h-[88vh] p-6 sm:p-8 relative border border-cyan-500/30 shadow-2xl flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-heading">Technosys Policy & Compliance Center</h3>
              <p className="text-xs text-slate-400">Sparkline Technosys Pvt. Ltd. Official Terms (Ver 1.0, Jan 2025)</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {['Terms & Conditions', 'Refund & Cancellation Policy', 'Privacy Policy'].map((pName) => (
              <button
                key={pName}
                onClick={() => { setActivePolicy(pName); setShowRefundForm(false); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activePolicy === pName && !showRefundForm
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {pName}
              </button>
            ))}

            <button
              onClick={() => setShowRefundForm(true)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ml-auto ${
                showRefundForm
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-900/80 text-emerald-400 hover:bg-slate-800 border border-emerald-500/30'
              }`}
            >
              + Online Refund Request Form
            </button>
          </div>
        </div>

        {/* Content Viewer or Interactive Form */}
        <div className="flex-1 overflow-y-auto my-4 p-6 bg-[#040711] rounded-2xl border border-slate-800/80 font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
          
          {showRefundForm ? (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold text-white font-heading">STPL Official Refund Request Form</h4>
                  <p className="text-xs text-slate-400">Direct submission to Technical Head of STPL Ankleshwar</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">Form STPL-REF-2025</span>
              </div>

              {refundSubmitted ? (
                <div className="p-8 text-center bg-cyan-950/40 rounded-2xl border border-cyan-500/40 space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white font-heading">Refund Form Submitted Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your request has been forwarded to the <strong>Technical Head of STPL</strong>. Once verified, processing will be completed within 15 days (Monthly) or 30 days (Annual).
                  </p>
                  <button
                    onClick={() => { setRefundSubmitted(false); setShowRefundForm(false); }}
                    className="btn-secondary py-2 px-5 text-xs font-bold"
                  >
                    Back to Policies
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRefundSubmit} className="space-y-4 text-xs">
                  
                  {/* Step 1 */}
                  <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-cyan-400 uppercase tracking-wider">1. Customer Identification</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Full Name (as registered)"
                        value={refundData.fullName}
                        onChange={(e) => setRefundData({ ...refundData, fullName: e.target.value })}
                        className="bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Registered Mobile Number"
                        value={refundData.mobile}
                        onChange={(e) => setRefundData({ ...refundData, mobile: e.target.value })}
                        className="bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email ID"
                        value={refundData.email}
                        onChange={(e) => setRefundData({ ...refundData, email: e.target.value })}
                        className="bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Customer ID / Connection ID (e.g. STPL-8890)"
                        value={refundData.connId}
                        onChange={(e) => setRefundData({ ...refundData, connId: e.target.value })}
                        className="bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                      />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-cyan-400 uppercase tracking-wider">2. Plan & Reason</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-slate-400">Plan Type</label>
                        <select
                          value={refundData.planType}
                          onChange={(e) => setRefundData({ ...refundData, planType: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                        >
                          <option value="Annual Service Plan">Annual Plan (Eligible within 3 Months)</option>
                          <option value="Monthly Service Plan">Monthly Plan (Eligible within 7 Days)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] text-slate-400">Reason for Refund</label>
                        <select
                          value={refundData.reason}
                          onChange={(e) => setRefundData({ ...refundData, reason: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                        >
                          <option value="Service not working properly">Service not working properly</option>
                          <option value="Shifting to another location">Shifting to another location</option>
                          <option value="Not satisfied with service">Not satisfied with service</option>
                          <option value="Other">Other (Specify below)</option>
                        </select>
                      </div>
                    </div>

                    <textarea
                      rows="2"
                      placeholder="Describe your issue or reason in detail (Optional)..."
                      value={refundData.issueDesc}
                      onChange={(e) => setRefundData({ ...refundData, issueDesc: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                    ></textarea>
                  </div>

                  {/* Step 3 */}
                  <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="font-bold text-cyan-400 uppercase tracking-wider">3. Bank / UPI Details for Refund Transfer</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Account Holder Name"
                        value={refundData.bankName}
                        onChange={(e) => setRefundData({ ...refundData, bankName: e.target.value })}
                        className="bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Account Number"
                        value={refundData.accNo}
                        onChange={(e) => setRefundData({ ...refundData, accNo: e.target.value })}
                        className="bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                      />
                      <input
                        type="text"
                        required
                        placeholder="IFSC Code"
                        value={refundData.ifsc}
                        onChange={(e) => setRefundData({ ...refundData, ifsc: e.target.value })}
                        className="bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white font-mono uppercase"
                      />
                    </div>
                  </div>

                  {/* Step 4 Checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer text-slate-300">
                      <input
                        type="checkbox"
                        checked={refundData.ack1}
                        onChange={(e) => setRefundData({ ...refundData, ack1: e.target.checked })}
                        className="mt-0.5"
                      />
                      <span>I agree that installation and GST charges will be deducted before refund processing per Section 5.</span>
                    </label>

                    <label className="flex items-start gap-2.5 cursor-pointer text-slate-300">
                      <input
                        type="checkbox"
                        checked={refundData.ack2}
                        onChange={(e) => setRefundData({ ...refundData, ack2: e.target.checked })}
                        className="mt-0.5"
                      />
                      <span>I confirm that all details provided are accurate and authorize STPL to process my refund accordingly.</span>
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 uppercase font-bold text-xs tracking-wider">
                    Submit Formal Refund Application
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="whitespace-pre-line">
              {activePolicy === 'Terms & Conditions' && termsText}
              {activePolicy === 'Refund & Cancellation Policy' && refundPolicyText}
              {activePolicy === 'Privacy Policy' && `
Effective Date: 25/01/2025 | Version: 1.0
Sparkline Technosys Pvt. Ltd. (STPL) Privacy Policy

1. Data We Collect: Customer Identification, Account Data, Legal CAF Documents, Service Usage, Device/IP Logs.
2. Purpose of Processing: Service activation, billing, RADIUS auth (JanitorRadius), telecom regulatory reporting.
3. Security Protocol: SSL/TLS transit encryption, AES-256 data at rest, Role-Based Access Control, Intrusion Prevention (IPS).
4. Retention: Account data (90 days post cancellation), Billing (5 years), Service logs (12 months).
5. Contact: sales@technosysonline.com
              `}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Ankleshwar Jurisdiction • STPL Version 1.0 (2025)</span>
          <button onClick={onClose} className="btn-secondary py-2 px-5 text-xs">
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
}
