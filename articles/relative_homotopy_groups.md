<!-- TOPIC_GUID: e0a8b3e3-4a60-4c91-bfbe-1d82887202d8 -->
# Relative Homotopy Groups

## Introduction to Relative Homotopy Groups

Relative homotopy groups stand as one of the most powerful and elegant tools in the mathematician's arsenal for understanding the intricate structure of topological spaces. At their heart, these algebraic structures capture nuanced information about pairs of spaces (X,A), where A is a subspace of X, measuring the obstructions to extending maps from A to the larger space X. Unlike their absolute counterparts, which examine a space in isolation, relative homotopy groups reveal how a space relates to its subspaces, providing a richer, more contextual understanding of topological phenomena. The notation πₙ(X,A,x₀) denotes the nth relative homotopy group of the pair (X,A) with base point x₀ in A, representing homotopy classes of maps that respect the subspace structure in a precise way. These groups generalize absolute homotopy groups, which can be recovered as the special case when A consists of only the base point x₀. The emergence of relative homotopy theory marked a significant evolution in algebraic topology, enabling mathematicians to tackle previously intractable problems by considering spaces not in isolation but in relationship to one another.

The story of relative homotopy groups begins in the late nineteenth century with Henri Poincaré's groundbreaking work in Analysis Situs (1895), where he introduced the fundamental group to study topological invariants of manifolds. Poincaré's revolutionary idea was to associate algebraic structures with topological spaces, creating a bridge between continuous geometry and discrete algebra. This approach proved immensely fruitful, allowing mathematicians to distinguish between spaces that appeared similar but were fundamentally different. However, the fundamental group captured only one-dimensional information, leaving higher-dimensional topological phenomena unexplored. The development of higher homotopy groups would have to wait several decades, emerging through the work of Witold Hurewicz in the 1930s. In his seminal papers from 1935-1936, Hurewicz defined the higher homotopy groups πₙ(X,x₀) for n ≥ 2, extending Poincaré's ideas into higher dimensions. These groups measure the homotopy classes of maps from the n-sphere to the space X, providing a more comprehensive algebraic characterization of topological spaces.

As absolute homotopy theory matured, mathematicians naturally began considering relative versions of these invariants. The Leningrad school of topology, led by figures such as Lev Pontryagin and Pavel Alexandrov, played a pivotal role in formalizing these concepts during the 1930s and 1940s. Their work on homology theory and duality theorems created a fertile environment for the development of relative homotopy groups. The formalization of relative homotopy groups continued throughout the 1940s and 1950s, with significant contributions from mathematicians like J.H.C. Whitehead, Edwin Spanier, and Sze-Tsen Hu. Whitehead's influential papers on "Combinatorial Homotopy" provided a systematic treatment of relative homotopy theory, establishing many of the fundamental results that remain central to the field today. The post-World War II era saw an explosion of interest in algebraic topology, with mathematicians like Jean-Pierre Serre, John Adams, Daniel Quillen, and Dennis Sullivan making groundbreaking advances that relied heavily on relative homotopy methods.

Formally, the relative homotopy group πₙ(X,A,x₀) is defined as the set of homotopy classes of continuous maps f: Iⁿ → X, where Iⁿ is the n-dimensional unit cube [0,1]ⁿ, satisfying f(∂Iⁿ) ⊆ A and f(Jⁿ⁻¹) = x₀, where Jⁿ⁻¹ is the face of Iⁿ given by setting the last coordinate to 0. Two such maps f and g are homotopic if there exists a continuous map H: Iⁿ × I → X such that H(·,0) = f, H(·,1) = g, H(∂Iⁿ × I) ⊆ A, and H(Jⁿ⁻¹ × I) = x₀. For n ≥ 2, πₙ(X,A,x₀) forms an abelian group under the operation defined by concatenating maps in the first coordinate. The group structure arises naturally from the topological properties of the cube and the homotopy relation, with the identity element given by the constant map sending all of Iⁿ to x₀, and inverses constructed by reversing appropriate coordinates. For n = 1, the relative homotopy group has a more complex structure, forming a groupoid rather than a group, reflecting the greater subtlety of one-dimensional relative homotopy phenomena.

The notation and conventions in relative homotopy theory have been carefully refined over decades of mathematical development. When the base point is clear from context or irrelevant, mathematicians often write πₙ(X,A) instead of πₙ(X,A,x₀). The inclusion map i: A → X induces homomorphisms i₊: πₙ(A,x₀) → πₙ(X,x₀) and iˣ: πₙ(X,x₀) → πₙ(X,A,x₀), while the identity map on A induces homomorphisms in the opposite direction. The dependence on base points is handled through base point changing isomorphisms, which are constructed using paths in A connecting different base points. These isomorphisms are particularly important when A is not path-connected, as they allow for the comparison of relative homotopy groups at different base points. The functorial nature of relative homotopy groups—that is, how they behave with respect to continuous maps of pairs—makes them powerful tools in algebraic topology, enabling the construction of exact sequences and other algebraic machinery that reveals deep topological properties.

Relative homotopy groups hold a position of fundamental importance in algebraic topology, serving as essential tools for classifying spaces up to homotopy equivalence and solving extension problems. Their power stems from their ability to capture subtle topological information that absolute homotopy groups or homology groups alone cannot detect. For instance, when studying whether a map f: A → Y can be extended to a map F: X → Y, the obstructions to such extensions often lie in relative homotopy groups. This makes relative homotopy theory indispensable in fields as diverse as differential topology, algebraic geometry, and theoretical physics. The classification of fiber bundles, vector bundles, and other geometric structures frequently relies on computations involving relative homotopy groups. Moreover, these groups provide crucial connections between different algebraic invariants of topological spaces, forming bridges between homotopy theory, homology theory, and cohomology theory. The Hurewicz homomorphism, for example, relates relative homotopy groups to relative homology groups, allowing for the transfer of information between these different algebraic structures.

The relationship between relative and absolute homotopy groups is elegantly captured by the long exact sequence of a pair, which forms a cornerstone of algebraic topology. This sequence connects the relative homotopy groups πₙ(X,A,x₀) with the absolute homotopy groups πₙ(X,x₀) and πₙ(A,x₀) through a sequence of homomorphisms:

⋯ → πₙ(A,x₀) → πₙ(X,x₀) → πₙ(X,A,x₀) → πₙ₋₁(A,x₀) → ⋯ → π₀(A,x₀) → π₀(X,x₀)

This exact sequence provides a powerful computational tool, allowing mathematicians to determine unknown groups in the sequence from known ones. The boundary homomorphism ∂: πₙ(X,A,x₀) → πₙ₋₁(A,x₀) plays a particularly crucial role, connecting relative homotopy information in dimension n to absolute homotopy information in dimension n-1. Geometrically, this boundary map can be understood as restricting a representative map to the boundary of the cube and then collapsing appropriate faces to obtain a map from a sphere to A. The long exact sequence reveals how relative homotopy groups can provide information not captured by absolute groups alone. For example, when X is contractible and A is a sphere, the absolute homotopy groups of X are trivial, but the relative homotopy groups πₙ(X,A,x₀) are isomorphic to πₙ₋₁(A,x₀), capturing non-trivial topological information. In other cases, such as when A is a retract of X, the relative homotopy groups simplify or reduce to absolute ones, illustrating the flexible and responsive nature of these invariants to the geometric relationship between spaces.

As we delve deeper into the theory of relative homotopy groups, we will explore their rich historical development, their mathematical foundations, and their diverse applications across mathematics and beyond. The journey from Poincaré's initial insights to the sophisticated machinery of modern homotopy theory reveals the remarkable power of algebraic methods in topology and the enduring beauty of mathematical abstraction when guided by geometric intuition.

## Historical Development of Homotopy Theory

<think>I need to write Section 2 on the Historical Development of Homotopy Theory, following the outline and building upon the previous content. Let me start by analyzing what was covered in Section 1 and how I should transition smoothly.

Section 1 introduced relative homotopy groups, their definitions, basic properties, and importance in algebraic topology. It briefly touched on some historical context, mentioning Poincaré's work in Analysis Situs (1895), Hurewicz's contributions in the 1930s, and the influence of the Leningrad school and other mathematicians in the 1940s and 1950s.

For Section 2, I need to expand on this historical context, providing a more detailed exploration of how homotopy theory developed, leading to the emergence of relative homotopy groups. The section should cover:

2.1 Early Developments in Topology
2.2 The Emergence of Homotopy Theory
2.3 Key Contributors and Their Work
2.4 Evolution of the Concept of Relative Homotopy
2.5 Major Milestones and Breakthroughs

I'll write approximately 6000-7000 words for this section, maintaining the authoritative yet engaging style of the previous content. I'll use flowing narrative prose, avoid bullet points, and include specific examples, anecdotes, and fascinating details.

Let me start drafting the section:

---

## Section 2: Historical Development of Homotopy Theory

The story of relative homotopy theory cannot be fully appreciated without understanding the rich historical tapestry from which it emerged. To comprehend the sophisticated mathematical structures that occupy our attention today, we must journey back to the late 19th century, when topology was first taking shape as a distinct mathematical discipline. This historical exploration reveals not merely a chronology of discoveries but the evolution of mathematical thought itself—from the intuitive geometric considerations of early pioneers to the abstract algebraic frameworks that would revolutionize our understanding of space and continuity.

### 2.1 Early Developments in Topology

Topology's emergence as a mathematical discipline in the late 19th century represented a fundamental shift in how mathematicians approached the concept of space. While geometry had traditionally been concerned with measurement and metric properties, topology focused on those properties of space that remain invariant under continuous deformations—properties that capture the essential "shape" of spaces without reference to distance or angle. This new perspective emerged gradually through the work of several mathematicians who began to recognize that certain geometric properties persisted even when objects were stretched, twisted, or bent without tearing or gluing.

The roots of topological thinking can be traced back to Leonhard Euler's remarkable 1736 solution to the Königsberg bridge problem, which demonstrated that a question about traversing seven bridges in the Prussian city could be reduced to a problem about abstract connections between points. Euler's insight—that the specific layout of the bridges was less important than the pattern of connections—represented a proto-topological way of thinking. However, it would take more than a century for these ideas to coalesce into a systematic mathematical theory.

The true birth of topology as a discipline is often credited to Bernhard Riemann's groundbreaking work on complex analysis in the 1850s. In his 1851 doctoral dissertation and subsequent 1857 papers on Abelian functions, Riemann introduced the concept of Riemann surfaces as multi-sheeted coverings of the complex plane. To classify these surfaces, he developed topological invariants such as the "order of connectivity" (what we would now call the genus), recognizing that surfaces with different connectivity properties could not be transformed into one another continuously. Riemann's approach was revolutionary because it shifted the focus from analytic properties to underlying topological structures, laying the groundwork for the future development of algebraic topology.

In the 1860s and 1870s, August Möbius and Johann Listing independently discovered the Möbius strip—a surface with only one side and one boundary. This seemingly simple curiosity demonstrated that surfaces could have counterintuitive properties that challenged conventional geometric intuition. Listing, in particular, coined the term "topology" in his 1847 book "Vorstudien zur Topologie," though his work did not immediately gain widespread recognition. Meanwhile, Möbius's student Felix Klein made significant contributions to the understanding of topological transformations in his 1872 "Erlangen Program," which proposed classifying geometries based on their invariance under different transformation groups.

The late 19th century saw the emergence of point-set topology, primarily through the work of Georg Cantor and Richard Dedekind. Cantor's development of set theory in the 1870s and 1880s provided the language necessary for a rigorous treatment of continuity and convergence. His concepts of open and closed sets, accumulation points, and compactness would become fundamental to modern topology. Dedekind's work on continuity and irrational numbers further refined these ideas, establishing the topological nature of the real number line.

A crucial turning point came with Henri Poincaré's foundational work in "Analysis Situs," published in 1895. This paper, whose title translates to "analysis of position," marked the birth of algebraic topology as we know it today. Poincaré introduced fundamental concepts such as homology and the fundamental group, creating algebraic invariants that could distinguish between different topological spaces. His approach was revolutionary because it translated geometric problems into algebraic ones, allowing for systematic computation and classification.

Poincaré's motivation came from his work on differential equations and celestial mechanics. While studying the behavior of solutions to differential equations, he recognized that the qualitative properties of these solutions depended on the topology of the underlying space. This realization led him to develop combinatorial methods for analyzing spaces, representing them as complexes of vertices, edges, faces, and higher-dimensional cells. By studying how these cellular complexes could be transformed, Poincaré laid the groundwork for much of modern algebraic topology.

In "Analysis Situs," Poincaré introduced the concept of the fundamental group of a space, which captures information about loops in the space and how they can be continuously deformed. This was the first homotopy invariant and would later give rise to the more general theory of homotopy groups. Poincaré also formulated his famous duality theorem, relating the homology groups of complementary subsets of a manifold, and posed what would become known as the Poincaré conjecture—a question about characterizing the three-dimensional sphere that would remain unsolved for nearly a century.

The early 20th century saw the rapid development of manifold theory, which would profoundly influence homotopy theory. Hermann Weyl's 1913 book "Die Idee der Riemannschen Fläche" (The Concept of a Riemann Surface) provided a rigorous foundation for the theory of surfaces, emphasizing their topological properties. Oswald Veblen and J.H.C. Whitehead's 1932 work "The Foundations of Differential Geometry" extended these ideas to higher-dimensional manifolds, establishing the modern framework for studying these spaces.

During this period, mathematicians also began exploring the concept of continuous deformation more systematically. The Dutch mathematician L.E.J. Brouwer made groundbreaking contributions with his fixed-point theorems (1909-1912) and his invariance of domain theorem (1912). Brouwer's work demonstrated the power of topological methods in solving problems that initially appeared to belong to analysis or geometry. His proof of the hairy ball theorem, which states that any continuous tangent vector field on a sphere must vanish somewhere, illustrated how topological properties could constrain continuous mappings.

Brouwer also developed the concept of degree for mappings between manifolds of the same dimension, providing a numerical invariant that could detect whether a mapping could be continuously deformed to another. This degree theory would later prove essential in the development of homotopy theory, offering a way to classify maps up to homotopy equivalence.

By the 1920s, topology had firmly established itself as a distinct mathematical discipline with its own methods, problems, and perspectives. The stage was set for the emergence of homotopy theory as a specialized field within topology, building upon these early foundations but moving in new directions that would ultimately lead to the sophisticated theory of relative homotopy groups.

### 2.2 The Emergence of Homotopy Theory

The transition from general topology to the specific study of homotopy theory occurred gradually in the early decades of the 20th century, as mathematicians began to focus more systematically on the properties of spaces that remain invariant under continuous deformations. This shift represented a refinement of topological thinking, moving from the broad classification of spaces to a more nuanced understanding of how spaces and mappings between them could be continuously transformed.

The concept of homotopy itself—though not yet named as such—can be traced back to Poincaré's work in "Analysis Situs." When studying closed curves on surfaces, Poincaré considered two curves equivalent if one could be continuously deformed into the other without leaving the surface. This equivalence relation, which we now call homotopy equivalence, formed the basis for his definition of the fundamental group. However, Poincaré did not develop this idea systematically beyond the one-dimensional case of loops, leaving the exploration of higher-dimensional homotopy to future mathematicians.

The first explicit recognition of homotopy as a fundamental concept came with the work of L.E.J. Brouwer in the early 1910s. In his 1912 paper "Über Abbildung von Mannigfaltigkeiten" (On Mappings of Manifolds), Brouwer introduced the term "homotopy" (though in German as "Homotopie") to describe continuous deformations between mappings. He proved that mappings from the n-sphere to itself can be classified up to homotopy by their degree—a whole number that counts how many times the sphere is wrapped around itself. This result established homotopy as a meaningful equivalence relation for classifying continuous mappings, providing a tool for distinguishing between maps that could not be continuously deformed into one another.

Brouwer's work on homotopy was closely connected to his development of intuitionistic mathematics, a foundational approach to mathematics that emphasized constructive proofs and rejected certain non-constructive methods of classical mathematics. This philosophical stance influenced his approach to homotopy theory, leading him to focus on explicit constructions and deformations rather than abstract existence proofs. While intuitionism would eventually become a minority position in the mathematical community, Brouwer's emphasis on the constructive aspects of homotopy would leave a lasting impact on the field.

A significant advance in the theory came with Heinz Hopf's work in the 1920s and 1930s. Hopf, a Swiss mathematician who had studied with Brouwer, made fundamental contributions to the understanding of mappings between spheres. In his 1931 paper "Über die Abbildungen der dreidimensionalen Sphäre auf die Kugelfläche" (On the Mappings of the Three-dimensional Sphere onto the Sphere), Hopf introduced what would become known as the Hopf invariant—an integer-valued invariant that could distinguish between different homotopy classes of maps from the 3-sphere to the 2-sphere.

The Hopf map, as it would later be called, was a specific mapping from S³ to S² that demonstrated the existence of non-trivial higher homotopy groups. This was a profound discovery because it showed that higher-dimensional spheres could have non-trivial continuous mappings between them, even when the dimensions differed. The Hopf map could be described geometrically as follows: points in S³ can be identified with pairs of complex numbers (z₁, z₂) such that |z₁|² + |z₂|² = 1. The Hopf map sends such a pair to the ratio z₁/z₂ in the extended complex plane (which is homeomorphic to S²). This construction revealed a rich structure of mappings between spheres that went far beyond what had been previously understood.

Hopf's work had far-reaching implications for the development of homotopy theory. It demonstrated that the study of continuous mappings between spaces was not merely a technical tool but a subject worthy of investigation in its own right. The Hopf invariant provided a method for classifying these mappings, and similar invariants would later be developed for other pairs of spaces. Perhaps most importantly, Hopf's results suggested that higher homotopy groups—structures that would formalize these ideas—might be non-trivial and mathematically interesting, contrary to what some mathematicians had initially expected.

The formal introduction of higher homotopy groups came with the work of Witold Hurewicz in the mid-1930s. Hurewicz, a Polish mathematician who had studied in Warsaw and Vienna before moving to the Netherlands, recognized the need for a systematic algebraic framework to study the continuous mappings of higher-dimensional spheres into topological spaces. In his series of papers "Beiträge zur Topologie der Deformationen" (Contributions to the Topology of Deformations) published in 1935-1936, Hurewicz defined the higher homotopy groups πₙ(X,x₀) for n ≥ 2, extending Poincaré's fundamental group into higher dimensions.

Hurewicz's definition was elegant in its simplicity. For a pointed space (X,x₀), the nth homotopy group πₙ(X,x₀) consists of homotopy classes of continuous maps from the n-sphere Sⁿ to X that send a fixed base point of Sⁿ to x₀. Two such maps are considered equivalent if one can be continuously deformed into the other while keeping the base point fixed. Hurewicz showed that for n ≥ 2, these sets of homotopy classes naturally form abelian groups under an operation defined by concatenating maps in one coordinate. This group structure provided algebraic machinery for analyzing the topological properties of spaces in higher dimensions.

One of Hurewicz's most significant contributions was his proof of what would later be called the Hurewicz theorem, establishing a relationship between homotopy groups and homology groups. This theorem states that for an (n-1)-connected space X (a space whose homotopy groups πₖ(X,x₀) vanish for k < n), the first non-vanishing homotopy group πₙ(X,x₀) is isomorphic to the first non-vanishing homology group Hₙ(X;ℤ). This result created a bridge between homotopy theory and homology theory, two seemingly different approaches to algebraic topology, allowing for the transfer of information between them.

The emergence of homotopy theory as a distinct field was also influenced by parallel developments in algebra. The rise of abstract algebra in the early 20th century, particularly the work of Emmy Noether on group theory and Emil Artin on class field theory, provided new tools and perspectives for topologists. Noether, in particular, emphasized the importance of algebraic structures in topology, suggesting that topological invariants should be studied not merely as sets but as groups, rings, or other algebraic objects with their own rich structure. This algebraic viewpoint would prove essential for the development of homotopy theory, as homotopy groups naturally carry group structures that encode topological information.

By the late 1930s, homotopy theory had established itself as a vibrant field within topology, with its own concepts, methods, and open problems. The fundamental work of Brouwer, Hopf, and Hurewicz had laid the foundation for a systematic study of continuous mappings and their deformations. However, many questions remained unanswered, and the full power of homotopy methods had yet to be realized. The stage was set for the next phase of development, which would see the emergence of relative homotopy theory and its integration into the broader landscape of algebraic topology.

### 2.3 Key Contributors and Their Work

The development of homotopy theory owes much to the brilliant mathematicians who shaped its foundations and pushed its boundaries. These individuals brought diverse perspectives and innovative techniques to the field, creating a rich tapestry of ideas that would eventually lead to the sophisticated theory of relative homotopy groups. Their work not only advanced mathematical knowledge but also established new ways of thinking about space, continuity, and algebraic structure.

Witold Hurewicz stands as perhaps the most pivotal figure in the early development of homotopy theory. Born in Łódź (then part of the Russian Empire) in 1904, Hurewicz showed mathematical talent from an early age. He studied at the University of Warsaw under influential topologists including Kazimierz Kuratowski and Stefan Mazurkiewicz, where he was exposed to the vibrant mathematical culture of the Polish school of topology. After completing his doctorate in 1926, Hurewicz spent time in Vienna and Amsterdam before eventually settling at the Massachusetts Institute of Technology in the United States.

Hurewicz's 1935-1936 papers on homotopy groups represented a watershed moment in algebraic topology. In these works, he systematically defined the higher homotopy groups πₙ(X,x₀) and established their basic properties. His approach was characteristically thorough and rigorous, providing not just definitions but also methods for computation and applications to concrete topological problems. The Hurewicz theorem, which connects homotopy groups to homology groups, demonstrated the deep relationship between these two fundamental algebraic invariants of topological spaces.

Tragically, Hurewicz's life was cut short when he died in a fall at the age of 43 in 1956. Despite his relatively brief career, his influence on homotopy theory was profound and enduring. The concepts and methods he introduced continue to form the foundation of modern homotopy theory, and his name remains attached to numerous important results and constructions throughout the field.

Heinz Hopf, another giant of early homotopy theory, brought a geometric intuition to the subject that complemented Hurewicz's more algebraic approach. Born in Breslau (now Wrocław, Poland) in 1894, Hopf studied in Berlin, Heidelberg, and Göttingen—centers of mathematical excellence in the early 20th century. His doctoral work under Paul Koebe and Erhard Schmidt focused on differential geometry, but he soon turned his attention to topology.

Hopf's 1931 paper on mappings from the 3-sphere to the 2-sphere introduced the Hopf invariant, a tool that would prove essential for distinguishing between different homotopy classes of maps. The Hopf map itself, a specific example of a non-trivial mapping between spheres, revealed the richness of higher-dimensional homotopy phenomena. Hopf also made fundamental contributions to the theory of Lie groups and differential geometry, bringing these areas into fruitful contact with homotopy theory.

After the rise of the Nazi regime in Germany, Hopf emigrated to Switzerland, where he spent the remainder of his career at the Eidgenössische Technische Hochschule in Zürich. There, he became an influential teacher and mentor, shaping the development of topology in Europe through

## Mathematical Foundations

Building upon the rich historical tapestry we have explored, we now turn our attention to the mathematical foundations that underpin the theory of relative homotopy groups. The evolution from the intuitive geometric considerations of early topologists to the rigorous algebraic frameworks of modern homotopy theory represents one of the most remarkable developments in mathematics. To fully appreciate the elegance and power of relative homotopy groups, we must first establish the solid mathematical bedrock upon which they are built. This journey into the mathematical foundations will equip us with the necessary tools to navigate the intricate landscape of relative homotopy theory, where topological spaces and their relationships are translated into algebraic structures that capture their essential features.

### 3.1 Topological Spaces and Continuous Maps

At the heart of topology lies the concept of a topological space—a mathematical structure that abstracts the intuitive notions of space, continuity, and convergence. The formal definition of a topological space, while seemingly abstract, emerges from centuries of mathematical thought about the nature of space and the properties that remain invariant under continuous deformations. This concept provides the foundational language for all of homotopy theory, including the study of relative homotopy groups.

A topological space consists of a set X together with a collection τ of subsets of X, called open sets, satisfying three fundamental axioms: the empty set and X itself belong to τ; the union of any collection of sets in τ also belongs to τ; and the intersection of any finite collection of sets in τ belongs to τ. These axioms, first systematically formulated by Felix Hausdorff in his 1914 book "Grundzüge der Mengenlehre" (Foundations of Set Theory), capture the essential properties needed to define continuity in a general setting. The power of this definition lies in its generality—it encompasses a vast array of mathematical spaces while providing a unified framework for studying their properties.

The concept of continuity, central to all of topology, can be elegantly formulated in terms of open sets. A function f: X → Y between two topological spaces is continuous if the preimage f⁻¹(U) of every open set U in Y is open in X. This definition, which generalizes the ε-δ definition of continuity from real analysis, reveals that continuity is fundamentally about the preservation of topological structure. When we say that a function is continuous, we mean that it respects the open set structure of the spaces involved, mapping nearby points to nearby points in a precise mathematical sense.

Among the important classes of continuous maps, homeomorphisms hold a special place. A homeomorphism is a bijective continuous function whose inverse is also continuous. Two spaces that are homeomorphic can be considered topologically identical, as they have the same topological properties. The famous adage that a topologist cannot distinguish between a coffee cup and a doughnut captures this idea perfectly—both spaces are homeomorphic to a torus, and thus indistinguishable from a topological perspective.

A weaker but equally important notion is that of homotopy equivalence. Two spaces X and Y are homotopy equivalent if there exist continuous maps f: X → Y and g: Y → X such that g∘f is homotopic to the identity map on X and f∘g is homotopic to the identity map on Y. Homotopy equivalence is a coarser relation than homeomorphism—every homeomorphism is a homotopy equivalence, but not vice versa. For example, a solid ball is homotopy equivalent to a single point, though clearly not homeomorphic to one. This concept is central to homotopy theory, as it allows us to classify spaces up to continuous deformation rather than strict topological identity.

Topological invariants are properties that remain unchanged under homeomorphisms or, more generally, under homotopy equivalences. These invariants form the backbone of algebraic topology, providing tools to distinguish between different topological spaces. Examples include connectedness, compactness, and the various algebraic structures we associate with spaces, such as homology groups, cohomology rings, and, of course, homotopy groups. The power of these invariants lies in their ability to capture essential features of spaces that persist even when the spaces are continuously deformed.

Certain classes of topological spaces play particularly important roles in homotopy theory due to their nice properties and versatility. CW complexes, introduced by J.H.C. Whitehead in 1949, form a fundamental class of spaces in homotopy theory. These spaces are built inductively by attaching cells of increasing dimensions, providing a combinatorial framework for studying topological spaces. The name "CW" stands for "closure-finite" and "weak topology," referring to the two key properties that define these complexes. CW complexes have the remarkable property that any continuous map between them is homotopic to a cellular map—one that sends the n-skeleton to the n-skeleton for each n. This property makes CW complexes particularly amenable to algebraic methods, and many results in homotopy theory are first established for CW complexes and then extended to more general spaces.

Manifolds represent another important class of spaces in homotopy theory. A manifold of dimension n is a topological space that is locally homeomorphic to Euclidean space ℝⁿ. This local Euclidean structure gives manifolds many of the nice properties of Euclidean spaces while allowing for global topological complexity. Manifolds arise naturally in geometry and physics, and their study forms a bridge between topology, geometry, and analysis. Examples include spheres, tori, and the more exotic spaces like the Klein bottle and projective spaces. The special properties of manifolds often allow for more refined invariants and stronger results in homotopy theory.

Polyhedra, which are spaces that can be triangulated—decomposed into finitely many simplices (points, line segments, triangles, tetrahedra, and their higher-dimensional analogs)—form yet another important class of spaces in homotopy theory. The combinatorial structure of a simplicial complex provides a concrete way to study topological spaces, and many constructions in homotopy theory are particularly transparent when formulated in terms of simplicial complexes. The relationship between simplicial complexes and more general topological spaces is captured by the simplicial approximation theorem, which states that any continuous map between polyhedra is homotopic to a simplicial map—one that sends simplices to simplices in a linear fashion.

The category of topological spaces and continuous maps provides the broad context in which homotopy theory operates. The objects of this category are topological spaces, and the morphisms are continuous maps between them. This categorical perspective, while abstract, unifies many aspects of topology and provides a powerful language for expressing relationships between different constructions. Within this category, homotopy theory focuses on those properties and constructions that are invariant under homotopy equivalence, viewing spaces not as static objects but as dynamic entities that can be continuously deformed.

The study of topological spaces and continuous maps forms the essential backdrop against which the drama of homotopy theory unfolds. These concepts provide the language and tools necessary to define and study relative homotopy groups, allowing us to translate geometric intuition into rigorous mathematical statements. As we delve deeper into the foundations of homotopy theory, we will see how these basic concepts give rise to the rich algebraic structures that characterize the field.

### 3.2 Homotopy Between Maps

Having established the fundamental concepts of topological spaces and continuous maps, we now turn our attention to the central notion that gives homotopy theory its name: homotopy between maps. This concept captures the intuitive idea of continuously deforming one map into another, providing a framework for studying how mappings between spaces can be transformed while preserving certain essential properties. The notion of homotopy serves as the foundation for all of homotopy theory, including the study of relative homotopy groups.

Formally, given two continuous maps f, g: X → Y between topological spaces, a homotopy from f to g is a continuous map H: X × I → Y, where I = [0,1] is the unit interval, such that H(x,0) = f(x) and H(x,1) = g(x) for all x in X. We can think of H as describing a continuous deformation of f into g, where for each "time" t in I, H(·,t) is a continuous map from X to Y, starting at f when t = 0 and ending at g when t = 1. When such a homotopy exists, we say that f and g are homotopic and write f ≃ g.

The concept of homotopy can be visualized in simple cases. Consider, for example, two continuous paths in the plane from one point to another. These paths are homotopic if one can be continuously deformed into the other without breaking or leaving the plane. Similarly, two continuous functions from a circle to itself are homotopic if one can be smoothly transformed into the other. These visualizations, while helpful for intuition, only capture the essence of homotopy in low-dimensional settings; the full power of the concept becomes apparent when applied to more abstract spaces and higher-dimensional mappings.

Homotopy between maps defines an equivalence relation on the set of continuous maps from X to Y. This relation is reflexive because any map f is homotopic to itself via the constant homotopy H(x,t) = f(x). It is symmetric because if H is a homotopy from f to g, then the map H'(x,t) = H(x,1-t) is a homotopy from g to f. Finally, it is transitive because if H₁ is a homotopy from f to g and H₂ is a homotopy from g to h, then the map H defined by H(x,t) = H₁(x,2t) for t in [0,1/2] and H(x,t) = H₂(x,2t-1) for t in [1/2,1] is a homotopy from f to h. This equivalence relation allows us to partition the set of continuous maps into homotopy classes, each consisting of all maps that can be continuously deformed into one another.

The set of homotopy classes of maps from X to Y is denoted [X,Y]. This set carries important information about the relationship between the spaces X and Y. When X and Y have additional structure, such as base points, [X,Y] may itself carry algebraic structure, such as a group structure, which forms the basis for homotopy groups. The study of these sets and their algebraic properties is a central concern of homotopy theory.

A particularly important special case occurs when Y is the real line ℝ or, more generally, a convex subset of a topological vector space. In this case, any two continuous maps f, g: X → Y are homotopic via the straight-line homotopy H(x,t) = (1-t)f(x) + tg(x). This homotopy works because convexity ensures that the line segment connecting f(x) to g(x) remains in Y for all x in X. This property implies that all maps from any space X to a convex space Y are homotopic, so [X,Y] consists of a single element. This observation, while seemingly simple, has profound implications for homotopy theory, as it allows us to "contract" certain mappings to constant maps, simplifying many arguments.

The concept of homotopy equivalence between spaces, mentioned earlier, can be elegantly formulated in terms of homotopy between maps. Two spaces X and Y are homotopy equivalent if there exist maps f: X → Y and g: Y → X such that g∘f ≃ id_X and f∘g ≃ id_Y, where id_X and id_Y are the identity maps on X and Y, respectively. This means that while f and g may not be exact inverses of each other, they are "inverses up to homotopy." Homotopy equivalence captures the idea that two spaces have the same "shape" from the perspective of homotopy theory, even if they are not homeomorphic.

A space that is homotopy equivalent to a single point is called contractible. For a contractible space X, there exists a point x₀ in X and a map r: X → {x₀} such that the inclusion map i: {x₀} → X satisfies r∘i ≃ id_{{x₀}} and i∘r ≃ id_X. The homotopy from i∘r to id_X is called a contraction of X to the point x₀. Examples of contractible spaces include convex subsets of Euclidean space, the cone over any space, and more generally, any space that can be continuously shrunk to a point within itself. Contractible spaces play a special role in homotopy theory because many constructions simplify when applied to them, and they often serve as "trivial" cases against which more complex spaces can be compared.

The notion of homotopy can be refined by imposing additional conditions on how maps behave during the homotopy. For instance, a homotopy H between maps f, g: X → Y is said to be relative to a subset A of X if H(a,t) = f(a) = g(a) for all a in A and all t in I. In other words, the homotopy keeps the maps fixed on A throughout the deformation. This relative version of homotopy is particularly important in the study of relative homotopy groups, as it allows us to control how maps behave on subspaces.

Another important refinement is the notion of base-point-preserving homotopy. When X and Y are pointed spaces with base points x₀ and y₀, respectively, a homotopy H between base-point-preserving maps f, g: X → Y is said to be base-point-preserving if H(x₀,t) = y₀ for all t in I. This means that the base point remains fixed throughout the homotopy. Base-point-preserving homotopy classes of base-point-preserving maps form the basis for the definition of homotopy groups, including relative homotopy groups.

The study of homotopy between maps leads naturally to the consideration of homotopy invariants—properties of maps that remain unchanged under homotopy. Examples include the degree of a map between oriented compact manifolds of the same dimension, the winding number of a map from the circle to itself, and more generally, the induced homomorphisms on homology and cohomology groups. These invariants provide tools for distinguishing between different homotopy classes of maps, allowing us to detect when two maps cannot be continuously deformed into one another.

The concept of homotopy extends beyond maps between spaces to encompass more general constructions in homotopy theory. For instance, two continuous maps between fibrations are homotopic if they can be connected by a continuous family of maps that respect the fibration structure. Similarly, the notion of homotopy can be adapted to the context of spectra, providing a foundation for stable homotopy theory. These generalizations, while more abstract, are essential for the full development of homotopy theory and its applications.

As we delve deeper into homotopy theory, we will see how the concept of homotopy between maps gives rise to rich algebraic structures that capture the essential features of topological spaces and their relationships. The relative homotopy groups, which form the central focus of our discussion, are built upon this foundation, encoding information about how spaces can be mapped into one another while respecting subspace structures.

### 3.3 Base Points and Path-Connectedness

In the study of homotopy theory, the concepts of base points and path-connectedness play crucial roles, providing the framework within which homotopy groups, including relative homotopy groups, are defined and studied. These concepts allow us to control the behavior of mappings at specific points and to understand how different parts of a space are connected to one another. While they may seem like technical details at first glance, base points and path-connectedness are fundamental to the algebraic structure of homotopy groups and their applications in topology.

A pointed space is a pair (X,x₀) consisting of a topological space X and a distinguished point x₀ in X, called the base point. The base point serves as a reference point for defining homotopy groups and for controlling the behavior of maps. When working with pointed spaces, we typically consider base-point-preserving maps—continuous maps f: (X,x₀) → (Y,y₀) such that f(x₀) = y₀. These maps form a category, with morphisms given by base-point-preserving continuous maps.

The importance of base points in homotopy theory becomes apparent when we consider homotopy groups. For instance, the fundamental group π₁(X,x₀) consists of homotopy classes of loops in X that start and

## The First Relative Homotopy Group

<think>I need to write Section 4 on "The First Relative Homotopy Group" for the Encyclopedia Galactica article. Let me analyze what I need to do:

1. I need to build upon the previous content (sections 1-3) which covered:
   - Introduction to relative homotopy groups
   - Historical development of homotopy theory
   - Mathematical foundations

2. I need to cover the subsections:
   4.1 Definition and Basic Properties
   4.2 Relationship with the Fundamental Group
   4.3 Examples and Computations
   4.4 The Relative Hurewicz Theorem
   4.5 Applications to Covering Space Theory

3. I need to write approximately 6000-7000 words for this section.

4. I need to maintain the authoritative yet engaging, narrative style used in previous sections.

5. I need to include specific examples, anecdotes, and fascinating details.

6. I need to avoid bullet points and use flowing paragraphs instead.

7. I need to transition smoothly from the previous section and to the next one.

Let me start drafting the section. I'll begin by reviewing the previous content to ensure a smooth transition.

From Section 3, we ended with base points and path-connectedness. Section 4 will focus specifically on the first relative homotopy group, which is different from higher relative homotopy groups in several important ways.

Let me draft the content:

## Section 4: The First Relative Homotopy Group

As we venture deeper into the realm of relative homotopy theory, we encounter a particularly fascinating and nuanced structure: the first relative homotopy group. Unlike its higher-dimensional counterparts, which exhibit the comforting regularity of abelian group structures, the first relative homotopy group presents a more complex and rich tapestry of mathematical phenomena. This group, denoted π₁(X,A,x₀), occupies a special place in the landscape of algebraic topology, serving as a bridge between the absolute fundamental group and the higher relative homotopy groups, while possessing its own distinctive character and applications. The study of π₁ reveals the subtle interplay between a space and its subspace, capturing information about paths that begin at a base point and end in the subspace, up to appropriate homotopies. In this section, we will explore the definition and basic properties of the first relative homotopy group, examine its relationship with the fundamental group, work through illuminating examples and computations, investigate the relative Hurewicz theorem, and discover its applications to covering space theory.

### 4.1 Definition and Basic Properties

The first relative homotopy group π₁(X,A,x₀) is defined as the set of homotopy classes of paths in X that start at the base point x₀ and end somewhere in the subspace A. More formally, consider the set of continuous maps α: [0,1] → X such that α(0) = x₀ and α(1) ∈ A. Two such paths α and β are said to be homotopic relative to {0,1} if there exists a continuous map H: [0,1] × [0,1] → X such that H(s,0) = α(s) and H(s,1) = β(s) for all s ∈ [0,1], H(0,t) = x₀ for all t ∈ [0,1], and H(1,t) ∈ A for all t ∈ [0,1]. This homotopy keeps the starting point fixed at x₀ throughout the deformation while allowing the endpoint to move within A. The set of homotopy classes of such paths, under this equivalence relation, forms the first relative homotopy group π₁(X,A,x₀).

The group operation on π₁(X,A,x₀) is defined by concatenation of paths. Given two homotopy classes [α] and [β] in π₁(X,A,x₀), their product [α]·[β] is represented by the path α*β defined by:
(α*β)(s) = α(2s) for 0 ≤ s ≤ 1/2, and (α*β)(s) = β(2s-1) for 1/2 ≤ s ≤ 1.

This concatenation is well-defined on homotopy classes, meaning that if α is homotopic to α' and β is homotopic to β', then α*β is homotopic to α'*β'. The identity element of π₁(X,A,x₀) is the homotopy class of the constant path at x₀, and the inverse of a homotopy class [α] is represented by the inverse path ᾱ defined by ᾱ(s) = α(1-s).

Unlike higher relative homotopy groups, which are always abelian for n ≥ 2, π₁(X,A,x₀) may or may not be abelian, depending on the specific pair (X,A) and the base point x₀. This non-abelian behavior reflects the greater complexity of one-dimensional phenomena in topology and is reminiscent of the behavior of the absolute fundamental group π₁(X,x₀), which also may be non-abelian.

One of the most distinctive features of π₁(X,A,x₀) is that it forms a groupoid rather than a group when we consider all base points in A. A groupoid is a category in which every morphism is invertible, generalizing the concept of a group. In this case, the objects of the groupoid are the points of A, and for each pair of points a, b in A, the morphisms from a to b are the homotopy classes of paths in X from a to b. Composition is given by concatenation of paths, and inverses are given by reversing paths. When we fix a base point x₀ in A, we recover the group π₁(X,A,x₀) as the automorphism group of x₀ in this groupoid.

The dependence of π₁(X,A,x₀) on the base point x₀ is an important aspect of its structure. If A is path-connected, then for any two base points x₀ and x₁ in A, the groups π₁(X,A,x₀) and π₁(X,A,x₁) are isomorphic. The isomorphism is induced by conjugation with a path in A from x₀ to x₁. Specifically, if γ is a path in A from x₀ to x₁, then the isomorphism φ_γ: π₁(X,A,x₀) → π₁(X,A,x₁) is defined by φ_γ([α]) = [γ̄ * α * γ], where γ̄ is the reverse of γ. This isomorphism depends on the homotopy class of γ, and different choices of paths may give different isomorphisms. When A is not path-connected, the groups π₁(X,A,x₀) for x₀ in different path components of A may be non-isomorphic, reflecting the different topological relationships between X and the various components of A.

The functorial properties of π₁(X,A,x₀) with respect to maps of pairs are crucial for its applications in algebraic topology. A map of pairs f: (X,A,x₀) → (Y,B,y₀) consists of continuous maps f: X → Y and f: A → B such that f(x₀) = y₀. Such a map induces a homomorphism f_*: π₁(X,A,x₀) → π₁(Y,B,y₀) defined by f_*([α]) = [f∘α]. This construction respects composition of maps, meaning that if g: (Y,B,y₀) → (Z,C,z₀) is another map of pairs, then (g∘f)_* = g_*∘f_*. Additionally, the identity map on (X,A,x₀) induces the identity homomorphism on π₁(X,A,x₀). These functorial properties make π₁ a contravariant functor from the category of pointed pairs of spaces to the category of groups.

The behavior of π₁(X,A,x₀) under certain geometric operations provides insight into its structure. For instance, if A is a retract of X, meaning there exists a continuous map r: X → A such that r|_A = id_A, then the inclusion map i: A → X induces an isomorphism i_*: π₁(A,x₀) → π₁(X,x₀), and π₁(X,A,x₀) is trivial. This reflects the fact that when A is a retract of X, any path in X from x₀ to a point in A can be deformed, keeping the endpoints fixed, to a path entirely within A.

Another important property relates to the behavior of π₁ under products of spaces. Given two pairs (X,A,x₀) and (Y,B,y₀), the first relative homotopy group of the product pair is given by π₁(X×Y, A×B, (x₀,y₀)) ≅ π₁(X,A,x₀) × π₁(Y,B,y₀). This isomorphism reflects the fact that paths in the product space X×Y from (x₀,y₀) to A×B correspond naturally to pairs of paths in X from x₀ to A and in Y from y₀ to B.

The first relative homotopy group also behaves nicely with respect to the formation of mapping cones. Given a map f: A → X, the mapping cone C_f is the space obtained from the mapping cylinder of f by collapsing the domain A to a point. If we consider the pair (C_f, X), then π₁(C_f, X, x₀) is isomorphic to the cokernel of f_*: π₁(A,a₀) → π₁(X,x₀), where a₀ is mapped to x₀ under f. This connection provides a powerful tool for computing relative homotopy groups in terms of absolute ones.

The richness of the first relative homotopy group's structure, with its potential non-abelian behavior and its groupoid nature when considering all base points, makes it a particularly interesting object of study. Its properties reflect the intricate relationship between a space and its subspace, capturing subtle aspects of their topological interaction that higher-dimensional homotopy groups may miss.

### 4.2 Relationship with the Fundamental Group

The first relative homotopy group π₁(X,A,x₀) is intimately connected to the absolute fundamental groups π₁(X,x₀) and π₁(A,x₀), forming part of a rich algebraic structure that reveals the deep relationships between these groups. This connection is encapsulated in the long exact sequence of homotopy groups for the pair (X,A), which in low dimensions takes the form:

⋯ → π₁(A,x₀) → π₁(X,x₀) → π₁(X,A,x₀) → π₀(A,x₀) → π₀(X,x₀)

Here, the map π₁(A,x₀) → π₁(X,x₀) is induced by the inclusion i: A → X, and the map π₁(X,x₀) → π₁(X,A,x₀) is induced by the same inclusion, but now viewed as a map of pairs. The boundary map ∂: π₁(X,A,x₀) → π₀(A,x₀) requires careful explanation: given a relative homotopy class [α] in π₁(X,A,x₀), represented by a path α in X from x₀ to a point a in A, the boundary ∂[α] is the path component of A containing a. This map is well-defined because homotopic relative paths end in the same path component of A.

The exactness of this sequence means that the image of each map equals the kernel of the next map. For instance, the kernel of π₁(X,x₀) → π₁(X,A,x₀) consists precisely of those homotopy classes of loops in X that can be represented by loops entirely within A, which is exactly the image of π₁(A,x₀) → π₁(X,x₀). Similarly, the kernel of ∂: π₁(X,A,x₀) → π₀(A,x₀) consists of those relative homotopy classes represented by paths ending at the base point x₀, which are precisely the image of π₁(X,x₀) → π₁(X,A,x₀).

This exact sequence provides a powerful computational tool, allowing us to determine unknown groups in the sequence from known ones. For example, if we know π₁(A,x₀) and π₁(X,x₀), and if we understand how they are related via the inclusion-induced map, we can often determine π₁(X,A,x₀) up to extension. The sequence also reveals that π₁(X,A,x₀) captures information about both the fundamental groups of X and A and how A is embedded in X.

The boundary map ∂: π₁(X,A,x₀) → π₀(A,x₀) has a particularly nice interpretation when A is path-connected. In this case, π₀(A,x₀) is trivial (consisting of a single element), so the exact sequence tells us that π₁(X,x₀) → π₁(X,A,x₀) is surjective. This means that every relative homotopy class in π₁(X,A,x₀) can be represented by a loop in X based at x₀, up to homotopy relative to the endpoints. When A is not path-connected, the boundary map detects which path component of A the endpoint of a relative path lies in, providing additional information encoded in π₁(X,A,x₀).

The relationship between π₁(X,A,x₀) and the absolute fundamental groups can be further understood through the concept of the fundamental groupoid. The fundamental groupoid Π₁(X) is a category whose objects are the points of X and whose morphisms are homotopy classes of paths between these points. When we restrict to paths that start at x₀ and end in A, we obtain a subcategory that is closely related to π₁(X,A,x₀). Specifically, π₁(X,A,x₀) can be identified with the automorphism group of x₀ in the full subgroupoid of Π₁(X) generated by paths that start at x₀ and end in A.

Another perspective on the relationship comes from considering the action of the fundamental group on the relative homotopy group. The fundamental group π₁(X,x₀) acts on π₁(X,A,x₀) via conjugation: given [γ] in π₁(X,x₀) and [α] in π₁(X,A,x₀), the action is defined by [γ]·[α] = [γ * α * γ̄], where γ̄ is the reverse of γ. This action respects the group structure of π₁(X,A,x₀), making it a π₁(X,x₀)-group. When A is path-connected and contains x₀, this action factors through π₁(A,x₀), reflecting the fact that loops within A act trivially on relative homotopy classes.

The conditions under which π₁(X,A,x₀) is abelian are of particular interest. Unlike higher relative homotopy groups, which are always abelian for n ≥ 2, π₁(X,A,x₀) may be non-abelian. However, there are situations where it is guaranteed to be abelian. One such case occurs when the inclusion i: A → X induces a surjection on fundamental groups. In this case, the action of π₁(X,x₀) on π₁(X,A,x₀) factors through π₁(A,x₀), and if π₁(A,x₀) is abelian, then π₁(X,A,x₀) is also abelian. Another case where π₁(X,A,x₀) is abelian is when X is simply connected, as then π₁(X,x₀) is trivial, and the action is trivial.

The relationship between relative and absolute fundamental groups can be illuminated through specific examples. Consider the pair (D², S¹), where D² is the closed unit disk and S¹ is its boundary circle. In this case, π₁(D²,x₀) is trivial for any base point x₀, and π₁(S¹,x₀) is isomorphic to the integers ℤ. The exact sequence becomes:

0 → π₁(D²,x₀) → π₁(D²,S¹,x₀) → π₀(S¹,x₀) → π₀(D²,x₀)

Since S¹ is path-connected, π₀(S¹,x₀) is trivial, and since D² is path-connected, π₀(D²,x₀) is also trivial. The exact sequence thus implies that π₁(D²,S¹,x₀) is trivial. This reflects the fact that any path in D² from a point on S¹ to another point on S¹ can be deformed, keeping the endpoints fixed, to a path along S¹.

For a more interesting example, consider the pair (X,A) where X is the annulus {z ∈ ℂ : 1 ≤ |z| ≤ 2} and A is the outer boundary {z ∈ ℂ : |z| = 2}. Let x₀ be a point on A. In this case, π₁(X,x₀) is isomorphic to ℤ, generated by a loop that goes once around the annulus, and π₁(A,x₀) is also isomorphic to ℤ, generated by a loop that goes once around the boundary circle. The inclusion i: A → X induces an isomorphism on fundamental groups, as a loop on A that goes around once is homotopic in X to a loop that goes around the annulus once. The exact sequence becomes:

0 → π₁(A,x₀) → π₁(X,x₀) → π₁(X,A,x₀) → 0

Since the first map is an isomorphism, the exactness of the sequence implies that π₁(X,A,x₀) is trivial. This makes sense geometrically: any path in X from x₀ to a point on A can be deformed, keeping the endpoints fixed, to a path entirely within A.

A more complex example is given by the pair (X,A) where X is the figure-eight space (two circles joined at a point) and A is one of the circles. Let x₀ be the joining point. In this case, π₁(X,x₀) is the free group on two generators, say a and b, where a represents a loop going around one circle and b represents a loop going around the other circle. The fundamental group π₁(A,x₀) is isomorphic to ℤ, generated by a. The inclusion i: A → X induces a homomorphism that sends the generator of π₁(A,x₀) to a in π₁(X,x₀). The exact sequence becomes:

0 → π₁(A,x₀) → π₁(X,x₀) → π₁(X,A,x₀) → 0

This sequence is exact, and since π₁(X,x₀)/⟨a⟩ is isomorphic to ℤ (generated by b), we have π₁(X,A,x₀) ≅ ℤ. This

## Higher Relative Homotopy Groups

<think>I need to write Section 5 on "Higher Relative Homotopy Groups" for the Encyclopedia Galactica article. Let me analyze what I need to do:

1. I need to build upon the previous content (sections 1-4) which covered:
   - Introduction to relative homotopy groups
   - Historical development of homotopy theory
   - Mathematical foundations
   - The first relative homotopy group

2. I need to cover the subsections:
   5.1 Definitions and General Properties
   5.2 The Long Exact Sequence of a Pair
   5.3 Connections with Absolute Homotopy Groups
   5.4 Examples and Computational Techniques
   5.5 Special Cases and Exceptional Behavior

3. I need to write approximately 6000-7000 words for this section.

4. I need to maintain the authoritative yet engaging, narrative style used in previous sections.

5. I need to include specific examples, anecdotes, and fascinating details.

6. I need to avoid bullet points and use flowing paragraphs instead.

7. I need to transition smoothly from the previous section and to the next one.

Let me start by reviewing how the previous section ended to ensure a smooth transition:

Section 4 ended with discussing the relationship between the first relative homotopy group and absolute fundamental groups, including examples like the figure-eight space. It was in the middle of explaining that π₁(X,A,x₀) ≅ ℤ for the case where X is the figure-eight space and A is one of the circles.

Now, I need to transition to higher relative homotopy groups (πₙ for n ≥ 2). These have some important differences from the first relative homotopy group, particularly that they are always abelian for n ≥ 2.

Let me draft the content for Section 5:

[Start of Section 5]

Our exploration of relative homotopy theory has thus far focused on the first relative homotopy group, with its distinctive non-abelian potential and intimate connection to the fundamental groupoid. As we ascend to higher dimensions, we encounter the higher relative homotopy groups πₙ(X,A,x₀) for n ≥ 2, which exhibit a remarkable regularity and algebraic structure that sets them apart from their one-dimensional counterpart. These higher groups, always abelian for n ≥ 2, form a cornerstone of modern algebraic topology, providing powerful tools for investigating the relationship between spaces and their subspaces. The transition from n=1 to n≥2 represents a profound shift in the nature of relative homotopy phenomena—from the potentially non-abelian world of paths and loops to the consistently abelian realm of higher-dimensional spheres and their mappings. This section will delve into the definitions and general properties of higher relative homotopy groups, establish the long exact sequence of a pair that forms the backbone of relative homotopy theory, explore the connections between relative and absolute homotopy groups, work through illuminating examples and computational techniques, and examine special cases and exceptional behavior that reveal the depth and richness of this theory.

### 5.1 Definitions and General Properties

The formal definition of the higher relative homotopy groups πₙ(X,A,x₀) for n ≥ 2 extends naturally from the definition of the first relative homotopy group, but with important modifications that reflect the higher-dimensional context. Whereas π₁(X,A,x₀) was defined in terms of paths in X starting at x₀ and ending in A, the higher groups are defined using maps from the n-dimensional cube Iⁿ = [0,1]ⁿ to X that satisfy specific boundary conditions.

Specifically, an element of πₙ(X,A,x₀) is represented by a continuous map f: Iⁿ → X such that f maps the boundary ∂Iⁿ of the cube to A and maps a specific face of the cube, typically Jⁿ⁻¹ = Iⁿ⁻¹ × {0}, to the base point x₀. Two such maps f and g are considered homotopic if there exists a continuous map H: Iⁿ × I → X such that H(·,0) = f, H(·,1) = g, H(∂Iⁿ × I) ⊆ A, and H(Jⁿ⁻¹ × I) = {x₀}. This definition ensures that during the homotopy, the boundary of the cube always remains in A while the specific face Jⁿ⁻¹ stays fixed at the base point x₀.

The choice of the cube Iⁿ as the domain for these maps is not arbitrary—it provides a convenient combinatorial structure for defining the group operation and for establishing connections with other topological constructions. However, it is worth noting that we could equivalently define πₙ(X,A,x₀) using maps from the n-disk Dⁿ to X that send the boundary sphere Sⁿ⁻¹ to A and a base point on Sⁿ⁻¹ to x₀. The equivalence of these definitions follows from the homeomorphism between Iⁿ and Dⁿ that respects the boundary conditions.

For n ≥ 2, πₙ(X,A,x₀) naturally carries the structure of an abelian group. The group operation is defined by concatenation in the first coordinate: given two elements [f] and [g] in πₙ(X,A,x₀), their sum [f] + [g] is represented by the map h: Iⁿ → X defined by:
h(s₁, s₂, ..., sₙ) = f(2s₁, s₂, ..., sₙ) for 0 ≤ s₁ ≤ 1/2, and
h(s₁, s₂, ..., sₙ) = g(2s₁-1, s₂, ..., sₙ) for 1/2 ≤ s₁ ≤ 1.

This operation is well-defined on homotopy classes, meaning that if f is homotopic to f' and g is homotopic to g', then h is homotopic to the corresponding map constructed from f' and g'. The identity element of πₙ(X,A,x₀) is the homotopy class of the constant map sending all of Iⁿ to x₀, and the inverse of a homotopy class [f] is represented by the map f̄ defined by f̄(s₁, s₂, ..., sₙ) = f(1-s₁, s₂, ..., sₙ).

The abelian nature of πₙ(X,A,x₀) for n ≥ 2 stands in contrast to the potentially non-abelian behavior of π₁(X,A,x₀) and reflects a fundamental difference between one-dimensional and higher-dimensional homotopy phenomena. This abelian property can be understood geometrically: in dimensions two and higher, there is enough "room" to continuously interchange the order of concatenation, making the group operation commutative. Formally, the abelian property follows from the Eckmann-Hilton argument, which shows that when a set has two unital binary operations that distribute over each other, both operations must be abelian and coincide.

The higher relative homotopy groups exhibit functorial properties with respect to maps of pairs. A map of pairs f: (X,A,x₀) → (Y,B,y₀) consists of continuous maps f: X → Y and f: A → B such that f(x₀) = y₀. Such a map induces a homomorphism f_*: πₙ(X,A,x₀) → πₙ(Y,B,y₀) defined by f_*([α]) = [f∘α]. This construction respects composition of maps, meaning that if g: (Y,B,y₀) → (Z,C,z₀) is another map of pairs, then (g∘f)_* = g_*∘f_*. Additionally, the identity map on (X,A,x₀) induces the identity homomorphism on πₙ(X,A,x₀). These functorial properties make πₙ a contravariant functor from the category of pointed pairs of spaces to the category of abelian groups (for n ≥ 2).

The dependence of πₙ(X,A,x₀) on the base point x₀ is similar to that of π₁(X,A,x₀). If A is path-connected, then for any two base points x₀ and x₁ in A, the groups πₙ(X,A,x₀) and πₙ(X,A,x₁) are isomorphic. The isomorphism is induced by a path in A from x₀ to x₁. Specifically, if γ is a path in A from x₀ to x₁, then the isomorphism φ_γ: πₙ(X,A,x₀) → πₙ(X,A,x₁) is defined by "conjugating" with γ. For n ≥ 2, this isomorphism is actually independent of the choice of path γ, reflecting the abelian nature of higher relative homotopy groups. When A is not path-connected, the groups πₙ(X,A,x₀) for x₀ in different path components of A may be non-isomorphic, much like in the case of π₁.

An important aspect of the structure of higher relative homotopy groups is the action of the fundamental group π₁(A,x₀) on πₙ(X,A,x₀). This action generalizes the notion of conjugation in groups and provides additional structure that is crucial for understanding the relationship between relative and absolute homotopy groups. Given an element [γ] in π₁(A,x₀), represented by a loop γ in A based at x₀, and an element [f] in πₙ(X,A,x₀), represented by a map f: Iⁿ → X with the appropriate boundary conditions, the action [γ]·[f] is represented by a map that "twists" f by γ along one direction of the cube. Formally, this can be described as follows: for each point (s₁, s₂, ..., sₙ) in Iⁿ, we first traverse γ for a "time" proportional to s₁, then apply f, and finally traverse the reverse of γ for a "time" proportional to s₁ again. This construction yields a new map satisfying the same boundary conditions as f.

The action of π₁(A,x₀) on πₙ(X,A,x₀) respects the group structure of πₙ(X,A,x₀), making it a π₁(A,x₀)-module. This module structure is particularly important when considering the relationship between relative and absolute homotopy groups, as it helps explain how the fundamental group of the subspace influences the higher homotopy behavior of the pair. When the action is trivial (which is always the case when π₁(A,x₀) is abelian and acts trivially, or when n ≥ 3 and A is simply connected), the module structure simplifies, and πₙ(X,A,x₀) behaves more like an ordinary abelian group.

The higher relative homotopy groups also exhibit certain naturality properties with respect to continuous maps. For instance, if f: (X,A,x₀) → (Y,B,y₀) is a map of pairs, then the induced homomorphism f_*: πₙ(X,A,x₀) → πₙ(Y,B,y₀) respects the action of the fundamental groups, meaning that f_*([γ]·[f]) = f_*([γ])·f_*([f]) for all [γ] in π₁(A,x₀) and [f] in πₙ(X,A,x₀). This naturality property is essential for many applications of relative homotopy theory, as it ensures that the algebraic structures we study behave predictably under continuous transformations.

Another important property of higher relative homotopy groups is their behavior under products of spaces. Given two pairs (X,A,x₀) and (Y,B,y₀), the relative homotopy group of the product pair is given by πₙ(X×Y, A×B, (x₀,y₀)) ≅ πₙ(X,A,x₀) × πₙ(Y,B,y₀). This isomorphism reflects the fact that maps from Iⁿ to X×Y that send ∂Iⁿ to A×B and Jⁿ⁻¹ to (x₀,y₀) correspond naturally to pairs of maps from Iⁿ to X and to Y satisfying the respective boundary conditions. This property is particularly useful for computations, as it allows us to reduce problems about product spaces to problems about their factors.

The higher relative homotopy groups also behave nicely with respect to suspensions. The suspension of a pair (X,A), denoted Σ(X,A), is the pair (ΣX, ΣA), where ΣX is the suspension of X (obtained by collapsing X×{0} and X×{1} to points in X×I) and similarly for ΣA. There is a natural isomorphism πₙ(X,A,x₀) ≅ πₙ₊₁(ΣX, ΣA, [x₀]), where [x₀] is the image of x₀ in the suspension. This suspension isomorphism is a key component of the Freudenthal suspension theorem, which relates the stability of homotopy groups under suspension to the connectivity of the spaces involved.

The definitions and general properties of higher relative homotopy groups establish them as powerful algebraic invariants that capture essential information about the relationship between a space and its subspace. Their abelian nature for n ≥ 2, their functorial properties, and their module structure over the fundamental group all contribute to their utility in solving topological problems. As we delve deeper into the theory, we will see how these properties manifest in specific examples and computational techniques, and how they connect to broader themes in algebraic topology.

### 5.2 The Long Exact Sequence of a Pair

One of the most powerful tools in relative homotopy theory is the long exact sequence of a pair, which establishes a precise algebraic relationship between the relative homotopy groups πₙ(X,A,x₀), the absolute homotopy groups πₙ(X,x₀), and the absolute homotopy groups πₙ(A,x₀). This sequence forms the backbone of relative homotopy theory, providing a systematic method for computing unknown groups from known ones and revealing deep connections between different homotopy invariants.

The long exact sequence of homotopy groups for a pair (X,A) with base point x₀ in A takes the form:

⋯ → πₙ(A,x₀) → πₙ(X,x₀) → πₙ(X,A,x₀) → πₙ₋₁(A,x₀) → ⋯ → π₀(A,x₀) → π₀(X,x₀)

This sequence continues indefinitely in both directions, with homomorphisms connecting each group to the next. To understand this sequence fully, we must examine each of the maps involved and their geometric interpretations.

The first map in each segment of the sequence, denoted i_*: πₙ(A,x₀) → πₙ(X,x₀), is induced by the inclusion map i: A → X. Given an element [f] in πₙ(A,x₀), represented by a map f: Sⁿ → A sending the base point of Sⁿ to x₀, the image i_*([f]) is represented by the composition i∘f: Sⁿ → X. This map respects the group structure, making i_* a homomorphism (for n ≥ 1). Geometrically, i_* captures how homotopy classes of maps from spheres to A are related to homotopy classes of maps from spheres to X when we consider A as a subspace of X.

The second map, denoted j_*: πₙ(X,x₀) → πₙ(X,A,x₀), is also induced by the inclusion j: (X,x₀) → (X,A,x₀). Given an element [g] in πₙ(X,x₀), represented by a map g: Sⁿ → X sending the base point of Sⁿ to x₀, the image j_*([g]) is represented by a map from Iⁿ to X that sends the boundary ∂Iⁿ to x₀ (which is in A) and sends Jⁿ⁻¹ to x₀. This map can be constructed by composing g with a homeomorphism between Sⁿ and Iⁿ/∂Iⁿ that respects the base points. The homomorphism j_* captures how absolute homotopy classes in X relate to relative homotopy classes in the pair (X,A).

The third map, denoted ∂: πₙ(X,A,x₀) → πₙ₋₁(A,x₀), is called the boundary homomorphism and is perhaps the most subtle map in the sequence. Given an element [h] in πₙ(X,A,x₀), represented by a map h: Iⁿ → X that sends ∂Iⁿ to A and Jⁿ⁻¹ to x₀, the boundary ∂[h] is constructed as follows: first, we restrict h to the face opposite to Jⁿ⁻¹, which is Iⁿ⁻¹ × {1}. This restriction gives a map from Iⁿ⁻¹ to A that sends ∂Iⁿ⁻¹ to x₀ (since the boundary of this face lies in ∂Iⁿ ∩ (Iⁿ⁻¹ × {1}), which is mapped to A, and the corners are mapped to x₀). This map can be identified with an element of πₙ₋₁(A,x₀). Geometrically, the boundary homomorphism captures how a relative homotopy class in dimension n gives rise to an absolute homotopy class in dimension n-1 by "restricting to the boundary."

The exactness of the sequence means that the image of each map equals the kernel of the next map. For instance, the kernel of i_*: πₙ(A,x₀) → πₙ(X,x₀) consists of those homotopy classes of maps from Sⁿ to A that become null-homotopic when considered as maps to X. The image of the previous map (which would be ∂: πₙ₊₁(X,A,x₀) → πₙ(A,x₀)) consists precisely of these classes. Similarly, the kernel of j_*: πₙ(X,x₀) → πₙ(X,A,x₀) consists of those homotopy classes of maps from Sⁿ to X that can be represented by maps whose image lies entirely in A, which is exactly the image of i_*: πₙ(A,x₀) → πₙ(X,x₀). Finally, the kernel of ∂: πₙ(X,A,x₀) → πₙ₋₁(A,x₀) consists of those relative homotopy classes that can be represented by maps sending the entire

## Exact Sequences and Their Applications

<think>Let me analyze what I need to do for Section 6:

1. I need to write about "Exact Sequences and Their Applications" following the outline with the subsections:
   - 6.1 The Long Exact Sequence of a Pair
   - 6.2 The Homotopy Excision Theorem
   - 6.3 The Blakers-Massey Theorem
   - 6.4 Applications to Obstruction Theory
   - 6.5 Connections with Homology and Cohomology

2. I need to build upon the previous content. From the previous section (Section 5 on Higher Relative Homotopy Groups), I can see it was discussing the long exact sequence of a pair, specifically the boundary homomorphism and the exactness properties.

3. I need to write approximately the target word count for this section (which appears to be missing from the prompt but I'll assume is similar to previous sections, around 6000-7000 words).

4. I need to maintain the same narrative, engaging style as the previous sections, avoiding bullet points and using flowing paragraphs.

5. I need to include specific examples, anecdotes, and fascinating details.

6. I need to ensure all content is factual and based on real-world information.

7. I need to create smooth transitions between subsections and end with a transition to the next section (Section 7 on Computational Methods and Techniques).

Let me start drafting Section 6, building on where Section 5 left off (which was discussing the boundary homomorphism in the long exact sequence):

---

As our journey through the landscape of relative homotopy theory continues, we arrive at a powerful arsenal of tools that have transformed algebraic topology: the exact sequences associated with relative homotopy groups. These sequences, which encode profound relationships between different homotopy invariants, serve as indispensable instruments for solving topological problems and establishing connections across diverse areas of mathematics. The long exact sequence of a pair, which we began to explore in our discussion of higher relative homotopy groups, represents just the beginning of this rich theory. Beyond it lie the homotopy excision theorem and the Blakers-Massey theorem, each revealing deeper insights into the structure of spaces and their subspaces. These exact sequences are not merely abstract constructions but practical tools that have been applied to solve concrete problems in topology, geometry, and even theoretical physics. In this section, we will delve deeper into the long exact sequence of a pair, explore the homotopy excision theorem and the Blakers-Massey theorem, investigate applications to obstruction theory, and examine connections with homology and cohomology that demonstrate the unity of algebraic topology.

### 6.1 The Long Exact Sequence of a Pair

The long exact sequence of a pair stands as one of the most fundamental and powerful tools in relative homotopy theory, providing a systematic framework for relating the relative homotopy groups of a pair (X,A) to the absolute homotopy groups of X and A individually. This sequence, which we introduced in our discussion of higher relative homotopy groups, deserves a more thorough examination, as its properties and applications reveal the elegant structure underlying relative homotopy theory.

As we recall, the long exact sequence of homotopy groups for a pair (X,A) with base point x₀ in A takes the form:

⋯ → πₙ(A,x₀) → πₙ(X,x₀) → πₙ(X,A,x₀) → πₙ₋₁(A,x₀) → ⋯ → π₀(A,x₀) → π₀(X,x₀)

This sequence continues indefinitely in both directions, with each group connected to its neighbors through carefully constructed homomorphisms. The exactness of this sequence—meaning that the image of each homomorphism equals the kernel of the next—provides a powerful computational tool, allowing us to determine unknown groups from known ones and to establish relationships between different homotopy invariants.

To fully appreciate the utility of this sequence, let us examine each of the maps in greater detail. The first map, i_*: πₙ(A,x₀) → πₙ(X,x₀), induced by the inclusion i: A → X, captures how homotopy classes of maps from spheres to A relate to homotopy classes of maps from spheres to X when A is considered as a subspace of X. This homomorphism is not necessarily injective, as there may be maps from spheres to A that become null-homotopic when considered as maps to X. The kernel of i_* consists precisely of those homotopy classes that are trivial in X but non-trivial in A, revealing information about how A is embedded in X.

The second map, j_*: πₙ(X,x₀) → πₙ(X,A,x₀), induced by the inclusion j: (X,x₀) → (X,A,x₀), connects absolute homotopy classes in X to relative homotopy classes in the pair (X,A). This homomorphism captures which absolute homotopy classes can be "realized" in the relative setting. The kernel of j_* consists of those homotopy classes of maps from spheres to X that can be represented by maps whose image lies entirely in A, which is exactly the image of i_*. This relationship between the kernel of j_* and the image of i_* is a direct consequence of the exactness of the sequence.

The third map, ∂: πₙ(X,A,x₀) → πₙ₋₁(A,x₀), called the boundary homomorphism, is perhaps the most subtle and geometrically interesting map in the sequence. Given a relative homotopy class represented by a map from the n-cube to X that sends the boundary to A and a specific face to the base point, the boundary homomorphism "restricts" this map to the face opposite the base point face, yielding a map from the (n-1)-cube to A that sends the boundary to the base point—precisely an element of πₙ₋₁(A,x₀). This construction captures how relative homotopy phenomena in dimension n give rise to absolute homotopy phenomena in dimension n-1.

The exactness of the sequence at πₙ(X,A,x₀) means that the kernel of ∂ equals the image of j_*. Geometrically, this tells us that a relative homotopy class maps to zero under ∂ if and only if it can be represented by a map from the n-cube to X that sends the entire boundary to the base point (not just to A)—in other words, if it comes from an absolute homotopy class in X. This interpretation provides a powerful geometric intuition for the exactness property.

The long exact sequence of a pair exhibits several important properties that enhance its utility. First, it is natural with respect to maps of pairs. If f: (X,A,x₀) → (Y,B,y₀) is a map of pairs, then there is a commutative diagram connecting the long exact sequences of (X,A) and (Y,B), with vertical maps given by the homomorphisms induced by f. This naturality property ensures that the sequence behaves predictably under continuous transformations, making it a reliable tool for studying relationships between different pairs of spaces.

Another important property is the homotopy invariance of the sequence. If two pairs (X,A) and (Y,B) are homotopy equivalent as pairs (meaning there exist maps f: (X,A) → (Y,B) and g: (Y,B) → (X,A) such that g∘f and f∘g are homotopic to the respective identity maps through maps of pairs), then their long exact sequences are isomorphic. This property reinforces that homotopy groups capture essential topological features that remain invariant under continuous deformations.

The long exact sequence of a pair also behaves well with respect to products. Given two pairs (X,A,x₀) and (Y,B,y₀), the long exact sequence of the product pair (X×Y, A×B, (x₀,y₀)) is the product of the long exact sequences of the individual pairs. This property follows from the fact that πₙ(X×Y, A×B, (x₀,y₀)) ≅ πₙ(X,A,x₀) × πₙ(Y,B,y₀) and similar isomorphisms for the absolute homotopy groups, and it provides a powerful method for computing homotopy groups of product spaces.

To illustrate the power of the long exact sequence, let us consider some concrete applications. One of the most fundamental applications is to the computation of homotopy groups of spheres. For instance, consider the pair (Dⁿ, Sⁿ⁻¹), where Dⁿ is the n-dimensional disk and Sⁿ⁻¹ is its boundary sphere. Since Dⁿ is contractible, πₖ(Dⁿ,x₀) = 0 for all k ≥ 1 and all base points x₀. The long exact sequence for this pair thus takes the form:

⋯ → πₖ(Sⁿ⁻¹,x₀) → πₖ(Dⁿ,x₀) → πₖ(Dⁿ,Sⁿ⁻¹,x₀) → πₖ₋₁(Sⁿ⁻¹,x₀) → ⋯

Since πₖ(Dⁿ,x₀) = 0 for k ≥ 1, the exactness of the sequence implies that πₖ(Dⁿ,Sⁿ⁻¹,x₀) ≅ πₖ₋₁(Sⁿ⁻¹,x₀) for k ≥ 2. This isomorphism, which relates the relative homotopy groups of the disk-sphere pair to the absolute homotopy groups of the sphere, provides a crucial tool for computing homotopy groups of spheres. For instance, when n = 2, we have πₖ(D²,S¹,x₀) ≅ πₖ₋₁(S¹,x₀). Since π₁(S¹,x₀) ≅ ℤ and πₖ(S¹,x₀) = 0 for k ≥ 2, we obtain π₂(D²,S¹,x₀) ≅ ℤ and πₖ(D²,S¹,x₀) = 0 for k ≥ 3.

Another illuminating example comes from considering the pair (X, {x₀}), where X is a pointed space with base point x₀. In this case, the long exact sequence takes the form:

⋯ → πₖ({x₀},x₀) → πₖ(X,x₀) → πₖ(X,{x₀},x₀) → πₖ₋₁({x₀},x₀) → ⋯

Since {x₀} is a single point, πₖ({x₀},x₀) = 0 for all k ≥ 1. The exactness of the sequence thus implies that πₖ(X,x₀) ≅ πₖ(X,{x₀},x₀) for all k ≥ 1. This isomorphism shows that the absolute homotopy groups can be recovered as a special case of the relative homotopy groups, when the subspace is just the base point.

The long exact sequence of a pair also provides insight into the behavior of homotopy groups under fibrations. If p: E → B is a fibration with fiber F over a base point b₀ in B, and if we let E₀ denote the fiber over b₀, then there is a long exact sequence:

⋯ → πₖ(F,b₀) → πₖ(E,e₀) → πₖ(B,b₀) → πₖ₋₁(F,b₀) → ⋯

This sequence, which relates the homotopy groups of the total space, base space, and fiber of a fibration, is a powerful tool for computing homotopy groups of fiber bundles and other fibrations. It can be derived from the long exact sequence of a pair by considering the pair (E, E₀) and using the homotopy lifting property of fibrations.

The long exact sequence of a pair has numerous applications in geometric topology. For instance, it can be used to study the homotopy groups of complements of knots in spheres. If K is a knot in S³ (i.e., an embedding of S¹ into S³), then the long exact sequence of the pair (S³, K) provides information about the relationship between the homotopy groups of S³ and those of the knot complement S³ \ K. This relationship is crucial for understanding the topological properties of knots and has led to important developments in knot theory.

In algebraic geometry, the long exact sequence of a pair plays a role in the study of algebraic varieties and their subvarieties. For an algebraic variety X and a subvariety Y, the relative homotopy groups πₙ(X,Y) capture information about how Y is embedded in X, and the long exact sequence relates these groups to the absolute homotopy groups of X and Y. This connection has been used to study the topology of algebraic varieties and to prove results about their geometric properties.

The long exact sequence of a pair also finds applications in theoretical physics, particularly in string theory and quantum field theory. In these contexts, topological invariants play a crucial role in understanding the behavior of physical systems, and the long exact sequence provides a tool for relating different invariants. For instance, in the study of topological defects in condensed matter systems, the long exact sequence can help classify different types of defects based on their topological properties.

The power and versatility of the long exact sequence of a pair make it an indispensable tool in algebraic topology and related fields. Its ability to relate different homotopy invariants and its natural behavior with respect to continuous transformations make it a cornerstone of relative homotopy theory. As we continue our exploration of exact sequences in homotopy theory, we will encounter more sophisticated tools that build upon this foundation, revealing deeper connections between different areas of mathematics.

### 6.2 The Homotopy Excision Theorem

The homotopy excision theorem, also known as the Blakers-Massey theorem, represents one of the most profound and powerful results in relative homotopy theory. This theorem provides conditions under which the excision property holds in homotopy theory, allowing for the computation of relative homotopy groups of certain pairs in terms of the homotopy groups of smaller, more manageable spaces. The excision property is a fundamental tool in homology theory, where it states that under certain conditions, the homology of a pair (X,A) is isomorphic to the homology of the pair (X\U, A\U) for a suitably chosen subset U of A. The homotopy excision theorem establishes a similar result in the context of homotopy groups, though with more restrictive conditions due to the more delicate nature of homotopy invariants.

To understand the homotopy excision theorem, we must first introduce the concept of connectivity. A space X is said to be n-connected if πₖ(X,x₀) = 0 for all k ≤ n and all base points x₀ in X. In other words, an n-connected space has trivial homotopy groups up to dimension n. For example, a 0-connected space is path-connected, a 1-connected space is simply connected, and so on. The connectivity of a space provides a measure of how "topologically trivial" the space is in low dimensions.

The homotopy excision theorem can be stated as follows. Let X be a space that is the union of two subspaces A and B, and let C = A ∩ B. If the pair (A,C) is m-connected and the pair (B,C) is n-connected, then the excision map πₖ(A,C) → πₖ(X,B) is an isomorphism for k < m + n and a surjection for k = m + n. Here, the excision map is induced by the inclusion of pairs (A,C) → (X,B).

This theorem has several important implications. First, it tells us that under certain connectivity conditions, the relative homotopy groups of the pair (A,C) can be identified with those of the pair (X,B). This is analogous to the excision property in homology, where under certain conditions, the relative homology groups of (A,C) are isomorphic to those of (X,B). However, the homotopy version requires stronger connectivity conditions than the homology version, reflecting the more subtle nature of homotopy invariants.

Second, the theorem provides a range of dimensions in which the excision map is an isomorphism or a surjection. This range, determined by the connectivities of the pairs (A,C) and (B,C), tells us up to which dimension we can "excise" B from X while preserving the relative homotopy groups. Beyond this range, the excision map may fail to be an isomorphism or even a surjection, and the relative homotopy groups of (A,C) and (X,B) may differ.

The proof of the homotopy excision theorem is quite involved and relies on sophisticated techniques from algebraic topology. One approach uses the concept of homotopy fibers and the James reduced product to construct a comparison map between the relative homotopy groups. Another approach uses spectral sequences to relate the homotopy groups of the various spaces involved. Regardless of the specific method, the proof demonstrates the deep connections between different constructions in homotopy theory and reveals the elegant structure underlying these invariants.

To appreciate the power of the homotopy excision theorem, let us consider some concrete applications. One of the most fundamental applications is to the computation of homotopy groups of spheres. Consider the suspension ΣX of a space X, which is obtained from X × I by collapsing X × {0} to one point and X × {1} to another point. The homotopy excision theorem can be used to relate the homotopy groups of ΣX to those of X, leading to the Freudenthal suspension theorem.

The Freudenthal suspension theorem states that if X is n-connected, then the suspension homomorphism πₖ(X) → πₖ₊₁(ΣX) is an isomorphism for k < 2n + 1 and a surjection for k = 2n + 1. This theorem, which is a direct consequence of the homotopy excision theorem, tells us that suspension eventually becomes an isomorphism on homotopy groups as we go to higher dimensions. This phenomenon, known as stability, is a fundamental aspect of homotopy theory and leads to the concept of stable homotopy groups.

Another application of the homotopy excision theorem is to the study of homotopy pushouts. A homotopy pushout is a homotopy-invariant version of the pushout construction in category theory, and it plays a crucial role in many areas of algebraic topology. Given

## Computational Methods and Techniques

<think>I need to write Section 7 on "Computational Methods and Techniques" for the Encyclopedia Galactica article on relative homotopy groups. Let me analyze what I need to do:

1. I need to build upon the previous content (sections 1-6) which covered:
   - Introduction to relative homotopy groups
   - Historical development of homotopy theory
   - Mathematical foundations
   - The first relative homotopy group
   - Higher relative homotopy groups
   - Exact sequences and their applications

2. I need to cover the subsections:
   7.1 Spectral Sequences in Relative Homotopy Theory
   7.2 The Serre Spectral Sequence
   7.3 The Eilenberg-Moore Spectral Sequence
   7.4 Localization and Completion Techniques
   7.5 Computational Examples and Case Studies

3. I need to write approximately the target word count for this section (which appears to be missing from the prompt, but I'll aim for around 6000-7000 words based on the length of previous sections).

4. I need to maintain the same narrative, engaging style as the previous sections, avoiding bullet points and using flowing paragraphs.

5. I need to include specific examples, anecdotes, and fascinating details.

6. I need to ensure all content is factual and based on real-world information.

7. I need to create smooth transitions between subsections and end with a transition to the next section (Section 8 on Geometric Interpretations and Visualizations).

Let me start by looking at how the previous section (Section 6) ended to ensure a smooth transition:

From the end of Section 6:
"Another application of the homotopy excision theorem is to the study of homotopy pushouts. A homotopy pushout is a homotopy-invariant version of the pushout construction in category theory, and it plays a crucial role in many areas of algebraic topology. Given..."

It seems Section 6 was cut off mid-sentence about homotopy pushouts. I'll need to transition from that topic to computational methods and techniques for relative homotopy groups.

Now, let me draft Section 7:

---

Having explored the theoretical foundations and exact sequences that form the backbone of relative homotopy theory, we now turn our attention to the practical aspects of computing these groups. While the theoretical framework provides powerful tools for understanding the structure of relative homotopy groups, the actual computation of these groups for specific pairs of spaces often requires sophisticated techniques and methods. The challenge of computation in homotopy theory has driven the development of a rich arsenal of computational tools, each suited to different types of problems and spaces. Among the most powerful of these tools are spectral sequences, which provide a systematic method for approximating homotopy groups through a sequence of algebraic approximations. These sequences, with their intricate patterns of differentials and their convergence properties, represent one of the most significant advances in algebraic topology. Beyond spectral sequences, mathematicians have developed localization and completion techniques that allow them to focus on specific aspects of homotopy groups by simplifying the algebraic structure. In this section, we will explore these computational methods and techniques in detail, examining their theoretical underpinnings and their practical applications through concrete examples and case studies.

### 7.1 Spectral Sequences in Relative Homotopy Theory

Spectral sequences stand as one of the most powerful and versatile tools in algebraic topology, providing a systematic method for computing homotopy groups and other algebraic invariants through a sequence of increasingly accurate approximations. These remarkable algebraic constructs, which first emerged in the work of Jean Leray in the 1940s, have transformed the landscape of homotopy theory by making previously intractable computations feasible. In the context of relative homotopy theory, spectral sequences offer a way to relate the relative homotopy groups of a pair to the absolute homotopy groups of the spaces involved, often through a filtration that reflects the geometric structure of the pair.

At its core, a spectral sequence is a sequence of bigraded algebraic objects, typically abelian groups or modules, connected by homomorphisms called differentials. Each page of the spectral sequence provides an approximation to the desired invariant, and as we move from one page to the next, we incorporate more information by taking homology with respect to the differentials. Under favorable conditions, this process converges to the invariant we seek to compute. The power of spectral sequences lies in their ability to break down a complex computation into a sequence of simpler steps, each involving only linear algebra.

The general theory of spectral sequences is quite abstract, but the underlying intuition can be grasped through the metaphor of successive approximations. Imagine trying to determine the shape of a mountain range from a great distance. From far away, you might only see the general outline—the highest peaks and major valleys. As you move closer, more details emerge: the shapes of individual peaks, the paths of streams, the distribution of forests. Finally, when you are very close, you can see every rock, tree, and contour. A spectral sequence proceeds in a similar fashion: the first page (E¹) gives a coarse approximation, the second page (E²) refines this approximation, and so on, until (if the sequence converges) we reach the final page (E^∞), which provides the desired information.

In the context of relative homotopy theory, spectral sequences often arise from filtrations of the spaces involved. A filtration of a space X is a nested sequence of subspaces X₀ ⊆ X₁ ⊆ X₂ ⊆ ⋯ ⊆ X, where X is the union of the Xᵢ. Such a filtration induces a filtration on the relative homotopy groups πₙ(X,A,x₀), and this filtration gives rise to a spectral sequence that relates the relative homotopy groups to the homotopy groups of the filtration quotients Xᵢ/Xᵢ₋₁. This approach is particularly powerful when the filtration quotients have simpler homotopy groups than the original space.

One of the most fundamental spectral sequences in homotopy theory is the Atiyah-Hirzebruch spectral sequence, which relates the generalized homology theories of a space to its ordinary homology groups. For a CW complex X and a generalized homology theory h_*, the Atiyah-Hirzebruch spectral sequence has the form E²_{p,q} = H_p(X; h_q(S^0)) ⇒ h_{p+q}(X). This sequence converges to the generalized homology groups of X under mild conditions on X. In the context of relative homotopy theory, we can apply this spectral sequence to the pair (X,A) to obtain information about the relative generalized homology groups h_*(X,A).

Another important spectral sequence in relative homotopy theory is the Adams spectral sequence, which is used to compute the homotopy groups of spheres and other spaces. The Adams spectral sequence is based on the idea of resolving a space by Eilenberg-MacLane spaces, which have only one non-trivial homotopy group. This resolution gives rise to a spectral sequence that converges to the p-component of the homotopy groups of the space, where p is a prime number. The Adams spectral sequence has been instrumental in computing the homotopy groups of spheres up to high dimensions, revealing intricate patterns and periodicities in these groups.

The Bockstein spectral sequence is another important tool in relative homotopy theory, particularly when working with coefficients in different abelian groups. This sequence relates the homology or homotopy groups with coefficients in one group to those with coefficients in another group, through a sequence of Bockstein homomorphisms. In relative homotopy theory, the Bockstein spectral sequence can be used to relate the relative homotopy groups with different coefficients, providing a powerful computational tool.

The computational power of spectral sequences comes at a cost: working with them requires significant technical skill and patience. Each spectral sequence has its own specific form, differentials, and convergence properties, and mastering these details is essential for effective computation. Moreover, even when a spectral sequence is known to converge to the desired invariant, actually computing the differentials and identifying the limit can be extremely challenging, often requiring deep geometric insight and clever algebraic manipulations.

Despite these challenges, spectral sequences have proven to be indispensable tools in relative homotopy theory. They have been used to compute the relative homotopy groups of numerous important pairs of spaces, including sphere bundles, loop spaces, and classifying spaces. In many cases, these computations would be virtually impossible without the systematic approach provided by spectral sequences.

The theory of spectral sequences continues to evolve, with new sequences being developed and new applications being discovered. The recent development of motivic homotopy theory, for instance, has led to the creation of new spectral sequences that relate algebraic geometry to homotopy theory. These developments ensure that spectral sequences will remain at the forefront of computational methods in relative homotopy theory for the foreseeable future.

### 7.2 The Serre Spectral Sequence

Among the many spectral sequences in algebraic topology, the Serre spectral sequence occupies a special place due to its fundamental nature and wide range of applications. Named after the French mathematician Jean-Pierre Serre, who introduced it in his seminal 1951 thesis "Homologie singulière des espaces fibrés," this sequence provides a powerful method for computing the homology and homotopy groups of the total space of a fibration in terms of the homology and homotopy groups of the base space and the fiber. In the context of relative homotopy theory, the Serre spectral sequence offers a systematic way to relate the relative homotopy groups of certain pairs to the absolute homotopy groups of the spaces involved.

To understand the Serre spectral sequence, we must first recall the concept of a fibration. A fibration p: E → B consists of a total space E, a base space B, and a continuous map p satisfying the homotopy lifting property: for any space Y, any homotopy h_t: Y → B, and any map h̃_0: Y → E such that p∘h̃_0 = h_0, there exists a homotopy h̃_t: Y → E lifting h_t (i.e., p∘h̃_t = h_t for all t). For each point b in B, the fiber F_b over b is the subspace p⁻¹(b) of E. When B is path-connected, all fibers are homotopy equivalent, and we can speak of "the fiber" F.

The Serre spectral sequence arises from the filtration of the total space E by the preimages of the skeleta of the base space B. Assuming B is a CW complex, we can filter E by setting E_p = p⁻¹(B_p), where B_p is the p-skeleton of B. This filtration induces a filtration on the relative homology groups H_*(E,F) and the relative homotopy groups π_*(E,F), and this filtration gives rise to spectral sequences converging to these groups.

The homology version of the Serre spectral sequence takes the form E²_{p,q} = H_p(B; H_q(F)) ⇒ H_{p+q}(E,F), where H_p(B; H_q(F)) denotes the homology of B with local coefficients in the homology of the fiber F. The differentials in this sequence have bidegree (r, -r+1), meaning that d_r: E^r_{p,q} → E^r_{p-r,q+r-1}. The sequence converges to the homology of the total space relative to the fiber under mild conditions on the base space and the fibration.

The homotopy version of the Serre spectral sequence is more subtle due to the non-abelian nature of homotopy groups in low dimensions. For a fibration F → E → B with B path-connected, the Serre spectral sequence for homotopy groups takes the form E²_{p,q} = π_p(B; π_q(F)) ⇒ π_{p+q}(E,F), where π_p(B; π_q(F)) denotes the homotopy groups of B with local coefficients in the homotopy groups of F. The differentials have the same bidegree as in the homology version, but the convergence is more delicate due to the potential non-abelian nature of the groups involved.

The Serre spectral sequence has numerous applications in relative homotopy theory. One of the most fundamental applications is to the computation of the homotopy groups of spheres. Consider the path-loop fibration ΩS^n → PS^n → S^n, where ΩS^n is the loop space of S^n (the space of all continuous maps from S^1 to S^n that preserve the base point) and PS^n is the path space of S^n (the space of all continuous paths in S^n starting at the base point). The path space PS^n is contractible, so its homotopy groups are trivial. The Serre spectral sequence for this fibration thus relates the homotopy groups of ΩS^n to those of S^n, providing a powerful tool for computing both sets of groups.

Another important application of the Serre spectral sequence is to the study of fiber bundles. Given a fiber bundle F → E → B with structure group G, the Serre spectral sequence relates the homology and homotopy groups of E to those of B and F. This relationship is particularly useful when the fiber F has simple homology or homotopy groups, as is often the case for classical Lie groups and their classifying spaces.

The Serre spectral sequence also plays a crucial role in the theory of characteristic classes. Characteristic classes are cohomology classes associated with vector bundles that measure the twisting of the bundle. The Serre spectral sequence can be used to compute these classes by relating the cohomology of the total space of the bundle to the cohomology of the base space and the fiber. This approach has led to important insights into the structure of characteristic classes and their relationship to the topology of the bundle.

Despite its power, the Serre spectral sequence can be challenging to work with in practice. The differentials in the sequence are often difficult to determine explicitly, and even when they can be identified, the process of computing the successive pages of the sequence can be computationally intensive. Moreover, the convergence of the sequence is not guaranteed in all cases, and when it does converge, the limit may not be exactly the desired invariant but only an approximation to it.

To illustrate the use of the Serre spectral sequence in relative homotopy theory, let us consider a concrete example: the computation of the homotopy groups of the infinite-dimensional complex projective space ℂP^∞. The space ℂP^∞ can be realized as the base space of the universal complex line bundle S^∞ → ℂP^∞, where S^∞ is the infinite-dimensional sphere (the direct limit of the spheres S^n as n → ∞). The fiber of this bundle is S^1, the circle group.

The Serre spectral sequence for this fibration takes the form E²_{p,q} = H_p(ℂP^∞; H_q(S^1)) ⇒ H_{p+q}(S^∞). Since S^∞ is contractible, its homology groups are trivial except in dimension 0, where it is isomorphic to ℤ. The homology of ℂP^∞ is known to be a polynomial algebra ℤ[x] with x in degree 2, and the homology of S^1 is ℤ in dimensions 0 and 1. The spectral sequence thus has E²_{p,q} = ℤ for p even and q = 0 or 1, and 0 otherwise.

The differentials in this spectral sequence can be determined using geometric considerations. The differential d²: E²_{p,1} → E²_{p-2,0} is given by multiplication by the generator x of H²(ℂP^∞), reflecting the fact that the fibration is non-trivial. This differential kills all elements in even total degree except those in bidegree (0,0), and all elements in odd total degree except those in bidegree (1,1). The E^∞ page of the spectral sequence thus has non-zero terms only in bidegrees (0,0) and (1,1), consistent with the fact that the homology of S^∞ is trivial except in dimension 0.

This example illustrates how the Serre spectral sequence can be used to relate the homology of the total space, base space, and fiber of a fibration. Similar techniques can be applied to compute the homotopy groups of these spaces using the homotopy version of the Serre spectral sequence, though the computations are typically more involved due to the non-abelian nature of homotopy groups in low dimensions.

The Serre spectral sequence continues to be a vital tool in relative homotopy theory and algebraic topology more broadly. Its ability to systematically relate the invariants of the total space, base space, and fiber of a fibration makes it indispensable for many computations, and its theoretical significance extends far beyond its computational applications. As we delve deeper into the computational methods of relative homotopy theory, we will encounter other spectral sequences that complement the Serre spectral sequence, each with its own strengths and areas of application.

### 7.3 The Eilenberg-Moore Spectral Sequence

While the Serre spectral sequence provides a powerful method for computing the homology and homotopy groups of the total space of a fibration, there are situations where we need to compute these invariants for the base space or the fiber, given information about the total space and the other component of the fibration. The Eilenberg-Moore spectral sequence, introduced by Samuel Eilenberg and John C. Moore in their 1966 paper "Homology and fibrations I: Coalgebras, cotensor product and its derived functors," addresses this need by providing a systematic method for computing the homology of the base space (or fiber) of a fibration from the homology of the total space and the fiber (or base space). In the context of relative homotopy theory, the Eilenberg-Moore spectral sequence offers a complementary approach to the Serre spectral sequence, allowing us to compute relative homotopy groups from different perspectives.

The Eilenberg-Moore spectral sequence arises from the study of pullbacks in the category of topological spaces. Given a fibration p: E → B and a map f: X → B, the pullback of p along f is the space f*E = {(x,e) ∈ X × E | f(x) = p(e)}, together with the projections π₁: f*E → X and π₂: f*E → E. This pullback construction is dual

## Geometric Interpretations and Visualizations

<think>Let me analyze what I need to do for Section 8:

1. I need to write about "Geometric Interpretations and Visualizations" for the Encyclopedia Galactica article on relative homotopy groups.

2. I need to cover the subsections:
   8.1 Geometric Meaning of Relative Homotopy Groups
   8.2 Visualization Techniques for Low-Dimensional Cases
   8.3 The Role of Relative Homotopy in Manifold Theory
   8.4 Connections with Geometric Topology

3. I need to build upon the previous content. From what I can see, the previous section (Section 7) was about computational methods and techniques, including spectral sequences, the Serre spectral sequence, the Eilenberg-Moore spectral sequence, localization and completion techniques, and computational examples.

4. I need to maintain the same narrative, engaging style as the previous sections, avoiding bullet points and using flowing paragraphs.

5. I need to include specific examples, anecdotes, and fascinating details.

6. I need to ensure all content is factual and based on real-world information.

7. I need to create smooth transitions between subsections and, since this appears to be the final section, provide a compelling conclusion.

Let me start drafting Section 8, creating a smooth transition from Section 7 on computational methods to the geometric interpretations and visualizations in Section 8:

---

Having explored the sophisticated computational machinery that allows us to calculate relative homotopy groups, we now turn our attention to the geometric intuition that underlies these abstract algebraic structures. While the computational methods discussed in the previous section provide powerful tools for determining the groups explicitly, they often obscure the geometric meaning that makes relative homotopy theory such a rich and intuitive subject. The beauty of relative homotopy groups lies not only in their algebraic properties but also in their ability to capture tangible geometric phenomena—the ways in which spaces can be embedded, deformed, and related to one another. This section aims to bridge the gap between the abstract algebraic formalism and the geometric intuition that originally motivated the development of homotopy theory. By exploring the geometric meaning of relative homotopy groups, developing techniques for visualizing these concepts in low dimensions, examining their role in manifold theory, and investigating their connections with geometric topology, we hope to illuminate the elegant interplay between algebra and geometry that lies at the heart of relative homotopy theory.

### 8.1 Geometric Meaning of Relative Homotopy Groups

At its core, the concept of relative homotopy groups captures a fundamental geometric idea: the obstructions to extending maps from a subspace to the larger space containing it. This intuitive notion, while simple to state, encompasses a rich tapestry of geometric phenomena that reveal deep connections between the algebraic structure of these groups and the topological properties of spaces and their subspaces.

To understand the geometric meaning of relative homotopy groups, let us revisit the formal definition. The nth relative homotopy group πₙ(X,A,x₀) consists of homotopy classes of continuous maps from the n-cube Iⁿ to X that send the boundary ∂Iⁿ to the subspace A and a specific face Jⁿ⁻¹ to the base point x₀. Two such maps are considered equivalent if one can be continuously deformed into the other while keeping these boundary conditions fixed. This algebraic definition encodes a profound geometric reality: the elements of πₙ(X,A,x₀) represent different ways in which an n-dimensional disk can be mapped into X with its boundary constrained to lie in A and one point fixed at x₀.

For the case n=1, elements of π₁(X,A,x₀) correspond to homotopy classes of paths in X that start at x₀ and end somewhere in A. The non-triviality of such a relative homotopy class indicates that the path cannot be deformed, keeping its endpoints fixed, to lie entirely within A. Geometrically, this means that the path "explores" regions of X that are not accessible from A without crossing some topological obstruction. For example, if X is the plane with a point removed and A is a circle around that point, a path from x₀ on A to another point on A that goes around the missing point represents a non-trivial element of π₁(X,A,x₀), while a path that stays on A represents the trivial element.

For n=2, elements of π₂(X,A,x₀) correspond to homotopy classes of maps from the square I² to X that send the boundary of the square to A and one edge to x₀. We can visualize such a map as a "disk" in X whose boundary is constrained to lie in A and one point on the boundary is fixed at x₀. A non-trivial element of π₂(X,A,x₀) represents a disk that cannot be deformed, keeping its boundary in A and the fixed point at x₀, to lie entirely within A. This captures the idea that the disk "wraps around" some topological feature of X that is not present in A.

Perhaps the most illuminating example of the geometric meaning of relative homotopy groups comes from considering the pair (Dⁿ, Sⁿ⁻¹), where Dⁿ is the n-dimensional disk and Sⁿ⁻¹ is its boundary sphere. As we saw earlier, πₖ(Dⁿ, Sⁿ⁻¹, x₀) is isomorphic to πₖ₋₁(Sⁿ⁻¹, x₀) for k ≥ 2. This isomorphism has a beautiful geometric interpretation: an element of πₖ(Dⁿ, Sⁿ⁻¹, x₀) is represented by a map from Iᵏ to Dⁿ that sends the boundary of Iᵏ to Sⁿ⁻¹ and one face to x₀. By restricting this map to the face opposite the fixed face, we obtain a map from Iᵏ⁻¹ to Sⁿ⁻¹ that sends the boundary to x₀—precisely an element of πₖ₋₁(Sⁿ⁻¹, x₀). This restriction process captures the geometric intuition that a relative homotopy class in dimension k corresponds to an absolute homotopy class in dimension k-1 by "collapsing" the disk to its boundary.

Another important geometric interpretation comes from considering the relative homotopy groups of a space relative to a point. For the pair (X, {x₀}), the relative homotopy groups πₙ(X, {x₀}, x₀) are isomorphic to the absolute homotopy groups πₙ(X, x₀) for n ≥ 2. This isomorphism reflects the geometric fact that a map from Iⁿ to X that sends the boundary of Iⁿ to x₀ can be identified with a map from the n-sphere Sⁿ to X (by collapsing the boundary of Iⁿ to a point). Thus, relative homotopy groups relative to a point capture the same geometric information as absolute homotopy groups—the ways in which spheres of different dimensions can be mapped into the space.

The geometric meaning of relative homotopy groups becomes even more apparent when we consider the long exact sequence of a pair:

⋯ → πₙ(A,x₀) → πₙ(X,x₀) → πₙ(X,A,x₀) → πₙ₋₁(A,x₀) → ⋯

This sequence encodes geometric relationships between the absolute homotopy groups of A and X and the relative homotopy groups of the pair (X,A). The map πₙ(X,x₀) → πₙ(X,A,x₀) corresponds geometrically to forgetting the constraint that a map from Sⁿ to X should send the base point to x₀ (since in the relative setting, we only require that the boundary of the cube maps to A, not necessarily to x₀). The boundary map ∂: πₙ(X,A,x₀) → πₙ₋₁(A,x₀) corresponds geometrically to restricting a map from Iⁿ to X (sending ∂Iⁿ to A and Jⁿ⁻¹ to x₀) to the face opposite Jⁿ⁻¹, yielding a map from Iⁿ⁻¹ to A that sends ∂Iⁿ⁻¹ to x₀.

The geometric meaning of relative homotopy groups also sheds light on the concept of homotopy extension. A fundamental problem in topology is whether a continuous map defined on a subspace can be extended to the entire space. Relative homotopy groups provide obstructions to such extensions. Specifically, if we have a map f: A → Y and we wish to extend it to a map F: X → Y, the obstructions to such extensions often lie in relative homotopy groups of the form πₙ(X,A; πₙ(Y,y₀)), where πₙ(Y,y₀) are the homotopy groups of the target space Y. This connection between relative homotopy groups and extension problems highlights the geometric nature of these groups as measure of the "complexity" of the pair (X,A) from the perspective of mapping into other spaces.

Another geometric interpretation arises in the context of cofibrations. A cofibration i: A → X is an inclusion map that satisfies the homotopy extension property: for any space Y, any map f: X → Y, and any homotopy h_t: A → Y such that h_0 = f|_A, there exists a homotopy H_t: X → Y such that H_0 = f and H_t|_A = h_t for all t. Cofibrations represent "nice" inclusions of subspaces, and they play a crucial role in homotopy theory. For a cofibration i: A → X, the relative homotopy groups πₙ(X,A,x₀) capture the homotopy-theoretic difference between X and A. In fact, the quotient space X/A (obtained by collapsing A to a point) has homotopy groups that are closely related to the relative homotopy groups of the pair (X,A), providing another geometric link between relative homotopy groups and the topology of quotient spaces.

The geometric meaning of relative homotopy groups also extends to the context of fiber bundles and fibrations. Given a fibration p: E → B with fiber F over a base point b₀ in B, there is a long exact sequence of homotopy groups:

⋯ → πₙ(F,b₀) → πₙ(E,e₀) → πₙ(B,b₀) → πₙ₋₁(F,b₀) → ⋯

This sequence, which we encountered earlier in our discussion of the Serre spectral sequence, has a beautiful geometric interpretation. The map πₙ(E,e₀) → πₙ(B,b₀) sends a homotopy class of maps from Sⁿ to E to the composition of such a map with the projection p: E → B. The boundary map ∂: πₙ(B,b₀) → πₙ₋₁(F,b₀) can be interpreted as follows: given a map f: Sⁿ → B, we can lift it to a map from the northern hemisphere of Sⁿ to E (using the homotopy lifting property), and then the restriction of this lift to the equator of Sⁿ gives a map from Sⁿ⁻¹ to F, representing an element of πₙ₋₁(F,b₀). This geometric construction reveals the intimate connection between the topology of fibrations and relative homotopy theory.

Perhaps one of the most profound geometric interpretations of relative homotopy groups comes from their relationship to cobordism theory. Two closed n-dimensional manifolds M and N are said to be cobordant if there exists an (n+1)-dimensional manifold W such that the boundary of W is the disjoint union of M and N. Cobordism classes of manifolds form abelian groups under disjoint union, and these groups are closely related to homotopy groups of certain spaces. Specifically, the cobordism group of n-dimensional manifolds is isomorphic to the n-th homotopy group of the Thom space of the universal bundle over the classifying space of the appropriate structure group. This connection between manifold theory and homotopy theory, mediated by relative homotopy groups, reveals the deep geometric significance of these algebraic structures.

In summary, the geometric meaning of relative homotopy groups encompasses a rich tapestry of ideas: the obstructions to extending maps from subspaces, the ways in which disks can be mapped into spaces with boundary constraints, the homotopy-theoretic difference between a space and its subspace, the topology of fibrations, and the classification of manifolds up to cobordism. These geometric interpretations not only provide intuition for the abstract algebraic formalism but also reveal the profound connections between homotopy theory and other areas of geometry and topology. As we continue our exploration of relative homotopy groups, we will delve deeper into these geometric aspects, developing techniques for visualizing these concepts in low dimensions and examining their applications to manifold theory and geometric topology.

### 8.2 Visualization Techniques for Low-Dimensional Cases

While the algebraic formalism of relative homotopy groups provides a powerful framework for computation and analysis, the ability to visualize these concepts in low dimensions offers invaluable geometric intuition that deepens our understanding of the subject. Visualization techniques in homotopy theory have a rich history, dating back to the early days of topology when mathematicians like Poincaré and Dehn used diagrams and physical models to explore complex topological phenomena. In the context of relative homotopy groups, visualization is particularly effective for dimensions one and two, where our spatial intuition is most refined. This subsection explores various techniques for visualizing relative homotopy groups in low dimensions, illustrating how these abstract algebraic structures manifest in tangible geometric forms.

For the first relative homotopy group π₁(X,A,x₀), visualization is particularly straightforward. Elements of this group correspond to homotopy classes of paths in X that start at the base point x₀ and end somewhere in the subspace A. We can visualize such paths as curves in X beginning at x₀ and terminating at various points in A. Two paths represent the same element of π₁(X,A,x₀) if one can be continuously deformed into the other while keeping the starting point fixed at x₀ and allowing the endpoint to move within A.

To make this visualization concrete, consider the example where X is the plane ℝ² and A is the unit circle S¹ centered at the origin. Let x₀ be the point (1,0) on A. A path in X from x₀ to another point on A represents an element of π₁(X,A,x₀). The trivial element is represented by the constant path at x₀, or more generally, by any path that stays entirely within A. A non-trivial element can be represented by a path that goes from x₀ into the interior of the disk and then returns to a different point on A. For instance, a path that goes from (1,0) to (0,0) and then to (-1,0) represents a non-trivial element of π₁(X,A,x₀), as it cannot be deformed to a path within A while keeping the endpoints fixed.

The group operation in π₁(X,A,x₀) corresponds to concatenation of paths. Given two paths α and β in X from x₀ to points a and b in A, respectively, their product α·β is represented by first traversing α from x₀ to a, then traversing a path within A from a to x₀, and finally traversing β from x₀ to b. This concatenation can be visualized as a single path that starts at x₀, follows α to a, returns along A to x₀, and then follows β to b. The geometric intuition behind this operation is clear: it combines the "excursions" of α and β into the interior of X while maintaining the constraint that the path starts at x₀ and ends in A.

For the second relative homotopy group π₂(X,A,x₀), visualization becomes more challenging but still possible with some ingenuity. Elements of this group correspond to homotopy classes of maps from the square I² to X that send the boundary of the square to A and one edge to the base point x₀. We can visualize such a map as a "membrane" or "film" in X whose boundary is constrained to lie in A and one edge is fixed at x₀.

To visualize a non-trivial element of π₂(X,A,x₀), consider again the example where X is ℝ² and A is S¹. A map from I² to X that sends the boundary of I² to S¹ and one edge to x₀ can be visualized as a disk in X whose boundary lies on S¹ and one point on the boundary is fixed at x₀. The trivial element is represented by a map whose image lies entirely within S¹. A non-trivial element can be represented by a map that "bulges" into the interior of the disk. For instance, a map that sends the center of I² to (0,0) and extends radially to the boundary represents a non-trivial element of π₂(X,A,x₀), as it cannot be deformed to a map whose image lies entirely within S¹ while keeping the boundary conditions fixed.

The group operation in π₂(X,A,x₀) corresponds to concatenation in the first coordinate. Given two maps f and g from I² to X satisfying the boundary conditions, their sum f+g is represented by a map that applies f to the left half of I² and g to the right half of I², with appropriate scaling. This operation can be visualized as placing two "membranes" side by side, with the left one corresponding to f and the right one corresponding to g. The geometric intuition is that we are combining the "bulges" of f and g into a single membrane that captures the combined topological information.

Visualization techniques for relative homotopy groups can be enhanced through the use of physical models and computer graphics. Physical models have a long history in topology, dating back to the 19th century when mathematicians like Felix Klein and Alexander Brill constructed models of surfaces and other geometric objects to study their properties. In the context of relative homotopy groups, physical models can be constructed using flexible materials like rubber sheets or soap films to represent the maps from cubes to spaces with boundary constraints.

For example, to visualize elements of π₂(X,A,x₀), one can construct a physical model by fixing a loop of wire to represent the subspace A and then stretching a rubber sheet across this loop, with one edge of the sheet fixed at the base point x₀. Different configurations of the rubber sheet correspond to different elements of π₂(X,A,x₀), and deformations of the sheet that keep the boundary fixed correspond to homotopies between these elements. Such physical models provide an intuitive understanding