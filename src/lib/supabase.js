// src/lib/supabase.js

import { createClient } from '@supabase/supabase-js';

// 你可以在 Supabase 控制台的 "Settings" -> "API" 中找到你的 URL 和公共 API 密钥
const SUPABASE_URL = 'https://oyiiweflogtvdjttnklc.supabase.co'; // 替换为你的 URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95aWl3ZWZsb2d0dmRqdHRua2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MDk5MjMsImV4cCI6MjA1MDA4NTkyM30.OxCFJhejps2CBULlaUarXrF9j1l8H5vQ_7gdVVd1nWE'; // 替换为你的 API 密钥

// 创建 Supabase 客户端实例
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);



