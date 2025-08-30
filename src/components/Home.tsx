"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, Download, ExternalLink, Github, HelpCircle } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("ERC20")
  const [tokenName, setTokenName] = useState("MyToken")
  const [tokenSymbol, setTokenSymbol] = useState("MTK")
  const [premint, setPremint] = useState("0")
  const [features, setFeatures] = useState({
    mintable: false,
    burnable: false,
    pausable: false,
    callback: false,
  })

  const contractCode = `// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.4.0
pragma solidity ^0.8.27;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract ${tokenName} is ERC20, ERC20Permit {
    constructor() ERC20("${tokenName}", "${tokenSymbol}") ERC20Permit("${tokenName}") {}
}`

  const tabs = ["ERC20", "ERC721", "ERC1155", "Stablecoin*", "Real-World Asset*", "Account", "Governor", "Custom"]

  const platforms = [
    { name: "Solidity", icon: "⚡" },
    { name: "Cairo", icon: "🔺" },
    { name: "Stellar", icon: "⭐" },
    { name: "Stylus", icon: "💎" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
              F
            </div>
            <span className="text-xl font-semibold text-gray-900">fake OpenZeppelin</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Forum
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Docs
            </a>
            <Github className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            <div className="w-5 h-5 text-gray-600 hover:text-gray-900">𝕏</div>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-blue-50 border-b border-blue-100 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">New</span>
            <span className="text-gray-700">
              Build secure, OpenZeppelin-standard smart contracts with your favorite AI using the{" "}
              <a href="#" className="text-blue-600 underline">
                Contracts MCP
              </a>
              .
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span>After deploying a contract, use the new Contracts UI Builder to spin up a quick UI</span>
            <Button variant="outline" size="sm" className="bg-gray-800 text-white hover:bg-gray-700 border-gray-800">
              Try the UI Builder <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Platform Icons */}
      <div className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex items-center gap-2 text-gray-600">
                <span className="text-lg">{platform.icon}</span>
                <span className="font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Contract Type Tabs */}
          <div className="flex items-center gap-1 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-6">
            {/* Left Sidebar - Settings */}
            <div className="w-80 bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">SETTINGS</h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={tokenName}
                      onChange={(e) => setTokenName(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="symbol" className="text-sm font-medium text-gray-700">
                      Symbol
                    </Label>
                    <Input
                      id="symbol"
                      value={tokenSymbol}
                      onChange={(e) => setTokenSymbol(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="premint" className="text-sm font-medium text-gray-700">
                      Premint
                    </Label>
                    <Input id="premint" value={premint} onChange={(e) => setPremint(e.target.value)} className="mt-1" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">FEATURES</h3>

                <div className="space-y-3">
                  {[
                    { key: "mintable", label: "Mintable" },
                    { key: "burnable", label: "Burnable" },
                    { key: "pausable", label: "Pausable" },
                    { key: "callback", label: "Callback" },
                  ].map((feature) => (
                    <div key={feature.key} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={feature.key}
                          checked={features[feature.key as keyof typeof features]}
                          onCheckedChange={(checked) => setFeatures((prev) => ({ ...prev, [feature.key]: checked }))}
                        />
                        <Label htmlFor={feature.key} className="text-sm text-gray-700">
                          {feature.label}
                        </Label>
                      </div>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Action Buttons */}
              <div className="flex items-center gap-2 mb-4">
                <Button variant="outline" size="sm">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Remix
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              {/* Code Editor */}
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-auto">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  <code>
                    <span className="text-gray-500">// SPDX-License-Identifier: MIT</span>
                    {"\n"}
                    <span className="text-gray-500">// Compatible with OpenZeppelin Contracts ^5.4.0</span>
                    {"\n"}
                    <span className="text-purple-400">pragma</span> <span className="text-blue-400">solidity</span>{" "}
                    <span className="text-green-400">^0.8.27</span>;{"\n\n"}
                    <span className="text-purple-400">import</span> {"{"}
                    <span className="text-blue-400">ERC20</span>
                    {"}"} <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">"@openzeppelin/contracts/token/ERC20/ERC20.sol"</span>;{"\n"}
                    <span className="text-purple-400">import</span> {"{"}
                    <span className="text-blue-400">ERC20Permit</span>
                    {"}"} <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">
                      "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol"
                    </span>
                    ;{"\n\n"}
                    <span className="text-purple-400">contract</span>{" "}
                    <span className="text-yellow-400">{tokenName}</span> <span className="text-purple-400">is</span>{" "}
                    <span className="text-blue-400">ERC20</span>, <span className="text-blue-400">ERC20Permit</span>{" "}
                    {"{"}
                    {"\n"}
                    {"    "}
                    <span className="text-purple-400">constructor</span>() <span className="text-blue-400">ERC20</span>(
                    <span className="text-green-400">"{tokenName}"</span>,{" "}
                    <span className="text-green-400">"{tokenSymbol}"</span>){" "}
                    <span className="text-blue-400">ERC20Permit</span>(
                    <span className="text-green-400">"{tokenName}"</span>) {"{}"}
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-lg rounded-full px-4 py-2">
          <span className="mr-2">✨</span>
          AI Assistant
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-4 mt-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          © fake OpenZeppelin 2025 | Privacy | Terms of Service
        </div>
      </footer>
    </div>
  )
}
