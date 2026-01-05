---
layout: default
title: Ana Sayfa
---

## Merhaba 👋  
Ben **Tolga Bayrak**.

Uçtan uca web uygulamaları geliştiren **full-stack yazılımcıyım**.  
Teknoloji seçimlerinden bağımsız olarak; sürdürülebilir, anlaşılır ve
uzun vadede yönetilebilir yazılım sistemleri geliştirmeye odaklanırım.

---

### Ne Üzerine Yazıyorum?

Bu blogda, gerçek projelerde karşılaştığım problemler ve bu problemlere
yaklaşım şeklim üzerine yazıyorum.

- Web uygulamaları ve ürün geliştirme
- Ölçeklenebilirlik ve performans
- Kodun sürdürülebilirliği
- Sistemsel düşünme ve mimari kararlar
- Frontend & backend arasındaki denge

---

### Yaklaşımım

- Her problemi önce **anlamaya** çalışırım  
- Çözümleri **basit ve genişletilebilir** tutarım  
- Kodun zamanla evrileceğini kabul ederim  
- Kullanıcıyı ve ürünü merkezde tutarım  

---

### Son Yazılar
{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%d %B %Y" }}
{% endfor %}
