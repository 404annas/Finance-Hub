'use client'

import React from 'react'
import { Zap } from 'lucide-react'
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <div className="grid gap-8 md:grid-cols-5 lg:gap-12">
          <div className="col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded bg-blue-500 p-2">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-white">FinanceHub</span>
            </div>
            <p className="text-sm text-slate-400">
              Empowering investors worldwide with AI-powered financial intelligence.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 py-6 mt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 FinanceHub. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-blue-400"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
