---
title: 'Introducing Extended Validation Certificates'
authors:
- yngve-pettersen
intro: 'Last year it became clear that the procedures for verifying data used to issue SSL certificates (and other types of certificates) were not as uniform as might be desired. This led to a situation where information in certificates might be misleading.'
tags:
- security
- certificates
- labs
license: os-asa
---

Last year it became clear that the procedures for verifying data used to issue SSL certificates (and other types of certificates) were not as uniform as might be desired. This led to a situation where information in certificates might be misleading.

Certificates are specially formatted documents used to identify certain entities — persons, companies or (in our case) Web sites — and associate them with a given public encryption key and its associated private key. A user can use this public key to verify documents digitally signed by the associated private key held by the identified entity. Alternatively, the user can use the public key to send encrypted information to the certificate’s owner that can only be decrypted by that private key.

Certificates are valid for a certain period and are signed by a Certificate Authority (CA), whose name is identified in the Web site’s certificate. This certificate is either signed by another CA, or it is (self)signed by the CA itself, with the private key assiociated with the public key in the certificate. In the first case the CA is called an intermediate CA (one that has been authorized to act as a CA by another CA), in the other case the certificate is called selfsigned, and the CA is called a Root CA. The Root CA certificates are the certificates that are preinstalled in clients because your only way to verify the Root CA is to have your own copy that you can use as a reference.

This sequence of Web site certificate, intermediate CAs and the Root CA is called a certificate chain. This certificate chain links the Web site’s certificate to a trusted root in the browser’s root certificate store through a chain of digital signatures. If it does not, your browser will tell you so.

To increase the usefulness of (in particular) SSL certificates and reduce the likelihood of misleading or incorrect information being placed in certificates, the browser vendors, the Certificate Authorities (CAs) and several others, such as the Information Security Committee of the American Bar Association, [WebTrust][1] and the Anti Phishing Working Group created the [CA Browser Forum][2].

[1]: http://www.webtrust.org/
[2]: http://www.cabforum.org

The forum’s goal is to create a set of guidelines for how certificates used for sensitive online transactions, such as payments, are created and how the information contained in them is checked before the certificate can be issued. The guidlines also specify what kind of controls browsers should perform before indicating that the certificates have been issued according to these guidelines.

Some details, like the general UI (for example a green security toolbar, as suggested by Microsoft) and how the certificates should be identified were decided early, when the browser vendors met in Toronto [1][3], [2][4], [3][5], [4][6] last year.

[3]: http://dot.kde.org/1132619164/
[4]: http://blogs.msdn.com/ie/archive/2005/11/21/495507.aspx
[5]: http://www.hecker.org/mozilla/ssl-ui
[6]: http://web.archive.org/web/20081014112932/http://www.opera.com/security/toronto/

That was the easy part.

The more difficult part was finding methods that to a reasonable and satisfactory degree can confirm that

- A Web site is owned and controlled by a given legal entity.
- That this entity has the right to control the Web site.
- Collect enough information so that it would be easier to find the Web site owner if necessary.

All of these procedures must also be possible for an auditor to verify.

There were some things that were not realistic to achieve, such as proving that the Web site owner is a law-abiding citizen, is trusthworty and reputable, and so on, or that it is safe to do business with the owner. These are critera that are far too subjective, and even if they are true at one point, that might change very quickly.

These guidelines are intended to raise the information quality of the certificates. For anyone wanting to engage in criminal activity, the guidelines also raise the bar in terms of cost, time-wise and financial, and the risk of getting caught.

What do the [EV Guidelines][7] demand?

[7]: http://www.cabforum.org/

Before issuing a certificate a CA must (for example) make sure that

- The company is a valid legal entity in its jurisdiction.
- The person(s) signing the contract are authorized to do so.
- The company owns the domain of the server, or is authorized by the owner to use the given server or domain.

There are also requirements for the procedures the CA must use when issuing a certificate, and what data must be included in the certificate.

All of the procedures must be audited regularly (yearly) by a WebTrust auditor (or equivalent), and if the CA fails an audit, the certificates it has issued can no longer be recognized as EV certificates.

On the browser side we must perform several checks of the certificate before we can turn on the Extended Validation indicator:

- We must (of course) check that the certificates verify correctly (that is, the signatures are OK, and trace back to a known Root CA, and none of the certificates have expired).
- Additionally there are requirements for the level of encryption that must be used in the certificate, as well as for the connection.
- Then we must verify that not just the site’s certificate, but all the intermediate CA certificates in the chain (but not the root) are still valid, and has not been revoked by the issuer. This will be done using OCSP (Online Certificate Status Protocol) and/or CRLs (Certificate Revocation Lists) which are regularly updated by the CA to include certificates that for some reason are no longer valid and has been revoked. A certificate can be revoked for many reasons such as when a new certificate has been issued, the private key has been stolen, or that fake data was used to get the certificate.
- Each EV certificate will contain at least one special identifier that marks it as an EV certificate, an EV-OID, that must also be included in all the intermediate CA certificates.
- To be recognized by the client as an EV certificate the EV-OID must be associated in the certificate store with the certificate of the Root CA. This association is contingent on the Root CA passing the yearly EV compliance audit. If the audit fails and the problems are not quickly resolved so that the CA passes a new audit, the EV-OIDs associated with the Root CA are removed during a regular update of the associations, and the certificates issued from this Root CA will no longer be recognized as EV certificates

Once a certificate has passed all these checks, the client can turn on the Extended Validation indicator, usually a green security toolbar (which in Opera is normally yellow).

### Implementation plans

Current plans among the CAs are to start offering EV early 2007, when the first [EV update of IE7][8] is planned.

[8]: http://blogs.msdn.com/ie/archive/2006/11/07/improving-ssl-extended-validation-ev-ssl-certificates-coming-in-january.aspx

Opera has not yet implemented complete support for what is needed for Extended Validation, but work is underway:

- Opera has supported OCSP verification of certificates since version 8.0, but CRL support is not yet implemented.
- Some of the necessary functionality have been tested in an internal demo version (see screenshot), based on a weekly release from March 2006.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/opera.gif" alt="Opera">
</figure>

There is a lot more that needs to be implemented before we can release a version with support for EV, but we will do so When It’s Ready.

Stay tuned.
