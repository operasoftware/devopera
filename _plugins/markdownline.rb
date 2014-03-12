module Jekyll
	module MarkdownLine
		def markdownline(input)
			site = @context.registers[:site]
			converter = site.getConverterImpl(Jekyll::Converters::Markdown)
			converter.convert(input.to_s).gsub(/\<\/?p\>/, '').gsub("\n", '')
		end
	end
end

Liquid::Template.register_filter(Jekyll::MarkdownLine)
