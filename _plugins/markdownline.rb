module Jekyll
	module MarkdownLine
		def markdownline(input)
			site = @context.registers[:site]
			converter = site.getConverterImpl(Jekyll::Converters::Markdown)
			converter.convert(input).gsub('<p>', '').gsub('</p>', '')
		end
	end
end

Liquid::Template.register_filter(Jekyll::MarkdownLine)